/* eslint-disable header/header */

import {
	registerAction2,
	Action2,
} from "../../../../../platform/actions/common/actions.js";
import { ServicesAccessor } from "../../../../../platform/instantiation/common/instantiation.js";
import { ICreatorOverlayService } from "./creatorOverlayService.js"; // Added .js extension
// import { PearAICreatorVisibleContext } from "../../../../common/contextkeys.js";

export class CloseCreatorOverlayAction extends Action2 {
	static readonly ID = "workbench.action.closeCreatorView";

	constructor() {
		super({
			id: CloseCreatorOverlayAction.ID,
			title: {
				value: "Close Creator View Popup",
				original: "Close Creator View Popup",
			},
			f1: false,
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.hide();
	}
}

export class OpenCreatorOverlayAction extends Action2 {
	static readonly ID = "workbench.action.openCreatorView";

	constructor() {
		super({
			id: OpenCreatorOverlayAction.ID,
			title: {
				value: "Open Creator View Popup",
				original: "Open Creator View Popup",
			},
			f1: false,
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.show();
	}
}

export class ProgressCreatorModeAction extends Action2 {
	static readonly ID = "workbench.action.progressCreatorToNextStage";

	constructor() {
		super({
			id: ProgressCreatorModeAction.ID,
			title: {
				value: "Progress Creator Mode",
				original: "Progress Creator Mode",
			},
			f1: false,
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.progressToNextStage();
	}
}

export class ToggleCreatorOverlayAction extends Action2 {
	static readonly ID = "workbench.action.toggleCreatorView";

	constructor() {
		super({
			id: ToggleCreatorOverlayAction.ID,
			title: {
				value: "Toggle Creator View Popup",
				original: "Toggle Creator View Popup",
			},
			f1: true,
			keybinding: {
				weight: 200,
			},
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.toggle();
	}
}

export class LockCreatorOverlayAction extends Action2 {
	static readonly ID = "workbench.action.lockCreatorView";

	constructor() {
		super({
			id: LockCreatorOverlayAction.ID,
			title: { value: "Lock Creator View", original: "Lock Creator View" },
			f1: true,
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.lock();
	}
}

export class UnlockCreatorOverlayAction extends Action2 {
	static readonly ID = "workbench.action.unlockCreatorView";

	constructor() {
		super({
			id: UnlockCreatorOverlayAction.ID,
			title: { value: "Unlock Creator View", original: "Unlock Creator View" },
			f1: true,
		});
	}

	run(accessor: ServicesAccessor): void {
		const creatorOverlayService = accessor.get(ICreatorOverlayService);
		creatorOverlayService.unlock();
	}
}

// Register all actions
registerAction2(OpenCreatorOverlayAction);
registerAction2(CloseCreatorOverlayAction);
registerAction2(ProgressCreatorModeAction);
registerAction2(ToggleCreatorOverlayAction);
registerAction2(LockCreatorOverlayAction);
registerAction2(UnlockCreatorOverlayAction);
