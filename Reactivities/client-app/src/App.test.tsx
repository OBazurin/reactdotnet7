import { test, expect } from '@playwright/experimental-ct-react';
import MyTextArea from './app/common/form/MyTextArea';

test('should work', async ({ mount }) => {
  const component = await mount(<MyTextArea rows={3} placeholder='Gello' name='gellothere' />);
  //await expect(component).toContainText('Learn React');
  await expect(component).toHaveText("asdasdasd");
});