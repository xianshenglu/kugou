import type { Plugin } from 'vite'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'

export function viteInlineCss(): Plugin {
  return {
    name: 'vite-inline-css',
    apply: 'build',
    writeBundle(options) {
      const outDir = options.dir || 'dist'
      const htmlFile = join(outDir, 'index.html')
      
      if (!existsSync(htmlFile)) {
        return
      }

      let html = readFileSync(htmlFile, 'utf-8')
      const htmlDir = dirname(htmlFile)
      
      const linkRegex = /<link([^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*)>/gi
      let match

      while ((match = linkRegex.exec(html)) !== null) {
        const fullMatch = match[0]
        const cssPath = match[2]
        
        const cssFilePath = resolve(htmlDir, cssPath.replace(/^\.\//, ''))
        
        if (existsSync(cssFilePath)) {
          const cssContent = readFileSync(cssFilePath, 'utf-8')
          const styleTag = `<style>${cssContent}</style>`
          html = html.replace(fullMatch, styleTag)
        }
      }

      writeFileSync(htmlFile, html, 'utf-8')
    }
  }
}

