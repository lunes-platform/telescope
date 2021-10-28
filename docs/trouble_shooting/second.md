---
sidebar_position: 2
---

# Gitlab templates

1. Make a folder in your gitlab's repository with a name: `.gitlab`

2. Inside this folder make a folder with a name: `issue_templates` for issues or `merge_requests_templates` for Merge Requests

3. Make a file inside `issue_templates` with a name `bug.md` with this context:

```markdown
# Bug Issue *Error Name*

## Expected behavior

## Actual behavior

## Steps for do **Error Name**

## Your Setup

- Version Application
- OS Version
- And more...
```

Another file with a name `proposal.md` with this context:

```markdown
# Proposal Issue *Name*

## *What* should this issue solve?

## *How* should this issue solve?
```

For **MERGE REQUESTS** make a file inside `merge_requests_templates` with a name `.md` with this context:

```markdown
## MR template

- [ ] CODE WITHOUT TEST WILL BE REJECTED

- [ ] CODE WITHOUT DOCS WILL BE REJECTED

- [ ] COMMITS OUTSIDE THE CONVENTIONAL WILL BE REJECTED
```
