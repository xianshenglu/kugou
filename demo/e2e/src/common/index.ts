import { Locator, expect } from '@playwright/test';

export async function waitForListRendered(
  dataListLocators: Locator,
  {
    timeout = 4000,
    message = 'list renders nothing, api may not work!',
  }: { timeout?: number; message?: string } = {}
): Promise<Locator> {
  await expect(dataListLocators.first()).toBeVisible({ timeout, message });
  return dataListLocators;
}

