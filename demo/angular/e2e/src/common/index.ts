import { browser, ElementArrayFinder } from 'protractor';
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
