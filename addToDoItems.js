import { Selector } from 'testcafe';

fixture `Requirement 1`
    .page `http://localhost:3000`;

    const titleInput = Selector('.add-item__title-field').find('input')
    const contentInput = Selector('.add-item__content-field').find('textarea')
    const saveButton = Selector('button').withText('SAVE')
    const displayTitle = Selector('.todo-item__title')
    const displayContent = Selector('.todo-item__content')

test ('Adding items in todo list', async t => {
    await t
    .typeText(titleInput, 'Heena')
    .typeText(contentInput, 'Hiiiii')
    .click(saveButton)
    .expect(displayTitle.innerText).eql('Title: Heena')
    .expect(displayContent.innerText).eql('Content: Hiiiii')
});

// If content is added without title, it is getting saved in todo list (Bug?)