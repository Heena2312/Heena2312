import { Selector } from 'testcafe';

fixture `Requirement 5`
    .page `http://localhost:3000`;

   const titleInput = Selector('.add-item__title-field').find('input')
   const contentInput = Selector('.add-item__content-field').find('textarea')
   const saveButton = Selector('button').withText('SAVE')
   const nextButton = Selector('.todo-list__pager').find('button').withText('next page')
   const previousButton = Selector('.todo-list__pager').find('button').withText('previous page')
   

test ('Page Sized if added 20 title content data set', async t => {
    
for (let i = 41; i > 0; i--)
{
        await t
        .typeText(titleInput, 'Heena ' +i)
        .typeText(contentInput, 'Hiiiii ' +i)
        .click(saveButton)    
}
        const pageNumber =  Selector('.todo-list__pager').child('span')
        await t
        .expect(nextButton.visible).eql(true)
        .expect(pageNumber.innerText).eql('current page: 1')
        .click(nextButton)
        .expect(previousButton.visible).eql(true)  
        .expect(pageNumber.innerText).eql('current page: 2') 
        .click(nextButton)
        .expect(pageNumber.innerText).eql('current page: 3') 
        .click(previousButton)
        .expect(pageNumber.innerText).eql('current page: 2')
     
});

