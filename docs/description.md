# Node Forest

Node Forest is an open-source forum, meant to do different things in different ways as a practice or experimental testbed. I'm starting with:

- AWS
  - Hosting: AWS Amplify
  - Data: DynamoDB
  - Authentication: IAM - Switching to Google identify
  - Monitoring: CloudWatch
  - Logging: CloudWatch
- React
- TypeScript
- shadcn/ui (uses: Tailwind & Radix).

I plan to have different cloud implementations of
Authentication
Data
cloud and backend versions and different front-end library/framework versions.

## Data

### Note

- Notes can have one of the following:
  - Notes text
  - A list of text items
  - A tree of text items
- A note also has:
  - Creator
  - Created date
- Or a note can be turned into a folder

## Rules

Who can change what?

- To start with only a note creator can do anything with it.
- An admin can flag and hide a note or folder and give it a reason.

## Use cases

1. Add a note. (Anyone)
2. Edit a note. (Creator)
3. Delete a note (Creator).
   1. Can we delete notes with children? Yes and there will be a backup of any stacks deleted.
   2. Do items actually get deleted? Yes, but they get backed up as well.

## Backing up data

### Back up a deleted stack

- If an item that has children is going to be deleted, it is backed up.
  - We do this by removing the parent id, and giving it the special parent id for deleted items.
  - And the top item's modified data will be changed
- Any user can restore their own deleted items.
- An admin can restore any.

## Logging

- All user actions should be logged.
- Logging in, logging out, adding a note, changing a note, deleting a note

## Children

- There will be an icon representing if the item has children, with an on-hover preview of the children
- Clicking on a note with children will bring the view to those children and a breadcrumb to get us back.

## Pages

### Home page

- Title Bar
  - App Name (on left)
  - User icon with drop down for sign in and sign out and user settings (on right)
- Main
  - List of notes from top down each one has a rounded border (pills) with a center alignment (or we switch from right to left).
  - Notes are grouped by having children or no children then sorted by modified date descending.
  - We see the text
  - user icon in upper right which opens a popup menu. - User name - last modified date - edit button - delete button
  - A footer
    - Current note count, last message, a link to message

### Login

### Recover

- A page to recover deleted items.
