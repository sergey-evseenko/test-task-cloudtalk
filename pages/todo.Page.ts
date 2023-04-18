const { I } = inject();

module.exports = {

    fields: {
        input: '.new-todo',
        numberOfItems: '//span[@class="todo-count"]//strong'
    },
    elements: {
        listItem: '//ul[@class="todo-list"]//li'
    },

    addItem(item: string) {
        I.fillField(this.fields.input, item);
        I.pressKey('Enter');
    },
    addItemsList(items: Array<string>) {
        for (const item of items) {
            this.addItem(item);
        }
    },
    async getItem(itemNumber: number) {
        const itemLocator = `(//ul[@class="todo-list"]//label)[${itemNumber}]`;
        return await I.grabTextFrom(itemLocator);
    },
    async getTodoItems() {
        const numberOfItems: number = await I.grabNumberOfVisibleElements(this.elements.listItem);
        const itemsToDo: string[] = [];
        for (let i = 1; i <= numberOfItems; i++) {
            itemsToDo.push(await this.getItem(i));
        }
        return itemsToDo;
    },
    async getNumberOfItemsLeft() {
        return await I.grabTextFrom(this.fields.numberOfItems);
    },
    checkItem(item: string) {
        I.click(`//label[text()="${item}"]//..//input`)
    },
    async isElementToggled(item: string) {
        const elementLocator = `//li[@class="completed"]//label[text()="${item}"]`;
        return await tryTo(() => I.seeElement(elementLocator));
    }
}
