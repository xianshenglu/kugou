import {
  browser,
  logging,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
/**
 * @todo fix error not work. error log can be collected from //protractor-beautiful-reporter
 */
export const expectNoErrorLog = async () => {
  it('should appear no errors at the console', async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
};
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function waitForListRendered(
  dataListFinders: ElementArrayFinder,
  {
    interval = 4000,
    message = 'list renders nothing, api may not work!',
  }: { interval?: number; message?: string } = {}
): Promise<ElementArrayFinder> {
  const hasList = async () => {
    const count = await dataListFinders.count();
    return count > 0;
  };
  browser.wait(hasList, interval, message);
  return dataListFinders;
}
