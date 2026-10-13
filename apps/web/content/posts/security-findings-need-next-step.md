---
slug: "security-findings-need-next-step"
title: "A security finding needs a next step"
date: "2026-10-13"
description: "A practical way to write security findings so the people responsible can decide what to do next."
published: true
---

A vulnerability report is useful when the reader can make a decision from it. A severity label alone does not explain what is exposed, how the issue can be reached, or what change would reduce the risk.

That does not mean every finding needs a long narrative. It needs enough evidence and context for someone to verify the issue and choose a response.

## Start with what is affected

Name the asset, component, endpoint or workflow. Identify the environment and version when those details are known. If the exact version is uncertain, say so. A reader should be able to tell whether the report concerns a production system, a test environment or a single device.

## Show how the issue was confirmed

Keep the reproduction steps short and specific. Include the relevant request, configuration or observed behavior, and remove secrets or personal data from any examples. State the access needed to reproduce the issue. If the evidence is incomplete, separate what you observed from what you suspect.

## Explain the consequence in this system

Describe the action an attacker could take and the conditions that make it possible. Avoid copying a generic impact statement when it does not fit the affected system. A weakness in an internal tool, a public service and a device that controls a physical process can have different consequences even when their technical labels look similar.

## Give the owner a useful response

Recommend a change that addresses the cause, then note any temporary mitigation if one is available. Mention trade-offs or compatibility questions that need testing. The system owner can then weigh the change against operational needs instead of choosing between an unexplained severity score and a disruptive fix.

Before closing a finding, agree on how the fix will be checked. A clear retest condition makes follow-up easier for both the person reporting the issue and the team maintaining the system.
