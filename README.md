# Node Forest

Node Forest will be an open-source discussion forum. I am currently in the early setup stages of authentication and data setup.

## Features

- Multi-user note creation: notes will be limited in length.
- Guest access to read note data
  The current admin is an AWS account holder who can edit data directly if needed.
- AWS
  - Hosting: AWS Amplify
  - Data: DynamoDB
  - Authentication: IAM - Switching to Google identity
  - Monitoring: CloudWatch
  - Logging: CloudWatch
- React
- TypeScript
- shadcn/ui (uses: Tailwind & Radix).

## Next Changes

- Notes can have child notes, regardless of the note owner
- When any note with child notes is deleted, it and all its child notes are moved to a deleted table. Any note in the delete section will be retrievable by the note's owner.
- Note types: Text, List, Tree
  - Notes can be turned into a list or tree of text nodes. We can then utilize auto-formatting for longer notes.
