import { newSpecPage } from "@stencil/core/testing";
import { CustomButton } from "../components/custom-button";

describe("custom-button", () => {
  it("should emit customButtonEvent when clicked", async () => {
    const page = await newSpecPage({
      components: [CustomButton],
      html: `<custom-button label="Test"></custom-button>`,
    });

    const button = page.root.shadowRoot.querySelector("button");
    const customButtonEventSpy = jest.spyOn(page.rootInstance.customButtonEvent, "emit");

    button.click();
    await page.waitForChanges();

    expect(customButtonEventSpy).toHaveBeenCalled();
  });
  
  it("should render the button with the provided label", async () => {
    const page = await newSpecPage({
      components: [CustomButton],
      html: `<custom-button label="Test"></custom-button>`,
    });
  
    const button = page.root.shadowRoot.querySelector("button");
  
    const expectedLabel = "Test";
    const actualLabel = button.textContent.trim();
  
    expect(actualLabel).toContain(expectedLabel);
  });
 

  it("should emit customButtonEvent when Enter key is pressed", async () => {
    const page = await newSpecPage({
      components: [CustomButton],
      html: `<custom-button label="Test"></custom-button>`,
    });

    const customButtonEventSpy = jest.fn();
    page.root.addEventListener('customButtonEvent', customButtonEventSpy);

    const button = page.root.shadowRoot.querySelector('button');
    button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(customButtonEventSpy).toHaveBeenCalled();
  });

  it("should have the correct font size on the button", async () => {
    const fontSize = '24px';
    const page = await newSpecPage({
      components: [CustomButton],
      html: `<custom-button label="Test" font-size="${fontSize}"></custom-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button') as HTMLButtonElement;

    expect(button.style.fontSize).toBe(fontSize);
  });
  
});
