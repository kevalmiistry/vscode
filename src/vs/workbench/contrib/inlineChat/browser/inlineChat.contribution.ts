/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerAction2 } from 'vs/platform/actions/common/actions';
import { EditorContributionInstantiation, registerEditorContribution } from 'vs/editor/browser/editorExtensions';
import { InlineChatController } from 'vs/workbench/contrib/inlineChat/browser/inlineChatController';
import * as InlineChatActions from 'vs/workbench/contrib/inlineChat/browser/inlineChatActions';
import { IInlineChatService, INLINE_CHAT_ID } from 'vs/workbench/contrib/inlineChat/common/inlineChat';
import { InstantiationType, registerSingleton } from 'vs/platform/instantiation/common/extensions';
import { InlineChatServiceImpl } from 'vs/workbench/contrib/inlineChat/common/inlineChatServiceImpl';
import { IInlineChatSessionService, InlineChatSessionService } from 'vs/workbench/contrib/inlineChat/browser/inlineChatSession';
import { Registry } from 'vs/platform/registry/common/platform';
import { IWorkbenchContributionsRegistry, Extensions } from 'vs/workbench/common/contributions';
import { LifecyclePhase } from 'vs/workbench/services/lifecycle/common/lifecycle';
import { InlineChatNotebookContribution } from 'vs/workbench/contrib/inlineChat/browser/inlineChatNotebook';

registerSingleton(IInlineChatService, InlineChatServiceImpl, InstantiationType.Delayed);
registerSingleton(IInlineChatSessionService, InlineChatSessionService, InstantiationType.Delayed);

registerEditorContribution(INLINE_CHAT_ID, InlineChatController, EditorContributionInstantiation.Eager); // EAGER because of notebook dispose/create of editors

registerAction2(InlineChatActions.StartSessionAction);
registerAction2(InlineChatActions.UnstashSessionAction);
registerAction2(InlineChatActions.MakeRequestAction);
registerAction2(InlineChatActions.StopRequestAction);
registerAction2(InlineChatActions.DiscardAction);
registerAction2(InlineChatActions.DiscardToClipboardAction);
registerAction2(InlineChatActions.DiscardUndoToNewFileAction);
registerAction2(InlineChatActions.CancelSessionAction);

registerAction2(InlineChatActions.ArrowOutUpAction);
registerAction2(InlineChatActions.ArrowOutDownAction);
registerAction2(InlineChatActions.FocusInlineChat);
registerAction2(InlineChatActions.PreviousFromHistory);
registerAction2(InlineChatActions.NextFromHistory);
registerAction2(InlineChatActions.ViewInChatAction);
registerAction2(InlineChatActions.ExpandMessageAction);
registerAction2(InlineChatActions.ContractMessageAction);
registerAction2(InlineChatActions.AccessibilityHelpEditorAction);

registerAction2(InlineChatActions.ToggleInlineDiff);
registerAction2(InlineChatActions.FeebackHelpfulCommand);
registerAction2(InlineChatActions.FeebackUnhelpfulCommand);
registerAction2(InlineChatActions.ApplyPreviewEdits);

registerAction2(InlineChatActions.CopyRecordings);


Registry.as<IWorkbenchContributionsRegistry>(Extensions.Workbench)
	.registerWorkbenchContribution(InlineChatNotebookContribution, LifecyclePhase.Restored);
