# shopping-cart-lists

#### Shopping Cart list Requirements

- 2 lists
  - first 
    - items that we are looking for
  - second
    - items that we have found
- input field to add new items to our looking for list (first)
  - can't add item if it already exists in either list
- no duplicates
- able to transfer item from one list to the other
- able to delete item from either list
- case insensitive

## File Structure

```javascript
  shpping_list - (src)
    ├──components
    |  ├──found.js
    |  ├──need.js
    |  ├──newItemInput.js
    |  └──singleItem.js
    ├──App.js
    └──index.js
```

## File Description

 #### App.js
  - class component
  - state: items, newItemText
  - actions:  handleChange, addNewItem, duplicateCheck, moveItem, deleteItem
  - displays our components
#### need.js
  - filters through our items and displays only the items that we still need
#### found.js
  - filters through our items and displays only the items that we already found
#### singleItems.js
  - item display component along with our move and delete buttons
#### newItemInput.js
  - handles our input for new items