Feature('Todo list tests');

const items: string[] = ['buy some cheese', 'feed the cat'];

Before(({ I }) => {
    I.resizeWindow(1920, 1080);
    I.amOnPage('https://todomvc.com/examples/vanillajs/');
})

Scenario('Test 1',  async ({I, todoPage }) => {
    todoPage.addItemsList(items);
    const itemsToDo: Array<string> = await todoPage.getTodoItems();
    I.assertDeepEqual(itemsToDo, items, "Invalid item text");
    I.assert(await todoPage.getNumberOfItemsLeft(), 2, "Invalid count");
});

Scenario('Test 2',  async ({ I , todoPage}) => {
    todoPage.addItemsList(items);
    todoPage.checkItem(items[0]);
    I.assert(await todoPage.isElementToggled(items[0]), true,  "Element is not toggled");
});
