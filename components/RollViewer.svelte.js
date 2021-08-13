import './RollViewer.svelte.css.proxy.js';
/* src/components/RollViewer.svelte generated by Svelte v3.41.0 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	check_outros,
	component_subscribe,
	create_bidirectional_transition,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	prevent_default,
	run_all,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../_snowpack/pkg/svelte.js";
import { fade } from "../_snowpack/pkg/svelte/transition.js";
import OpenSeadragon from "../_snowpack/pkg/openseadragon.js";

import {
	rollMetadata,
	currentTick,
	userSettings,
	playExpressionsOnOff,
	rollPedalingOnOff,
	playbackProgress
} from "../stores.js";

import {
	clamp,
	mapToRange,
	normalizeInRange,
	getHoleLabel,
	getHoleType
} from "../utils.js";

import RollViewerControls from "./RollViewerControls.svelte.js";

function create_if_block_1(ctx) {
	let p;
	let p_transition;
	let current;

	return {
		c() {
			p = element("p");
			p.textContent = "Downloading roll image...";
			attr(p, "class", "svelte-aepdni");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			current = true;
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!p_transition) p_transition = create_bidirectional_transition(p, fade, {}, true);
				p_transition.run(1);
			});

			current = true;
		},
		o(local) {
			if (!p_transition) p_transition = create_bidirectional_transition(p, fade, {}, false);
			p_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(p);
			if (detaching && p_transition) p_transition.end();
		}
	};
}

// (575:2) {#if showControls}
function create_if_block(ctx) {
	let rollviewercontrols;
	let current;

	rollviewercontrols = new RollViewerControls({
			props: {
				openSeadragon: /*openSeadragon*/ ctx[0],
				minZoomLevel,
				maxZoomLevel,
				updateTickByViewportIncrement: /*updateTickByViewportIncrement*/ ctx[8]
			}
		});

	return {
		c() {
			create_component(rollviewercontrols.$$.fragment);
		},
		m(target, anchor) {
			mount_component(rollviewercontrols, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const rollviewercontrols_changes = {};
			if (dirty[0] & /*openSeadragon*/ 1) rollviewercontrols_changes.openSeadragon = /*openSeadragon*/ ctx[0];
			rollviewercontrols.$set(rollviewercontrols_changes);
		},
		i(local) {
			if (current) return;
			transition_in(rollviewercontrols.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(rollviewercontrols.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(rollviewercontrols, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let div_style_value;
	let current;
	let mounted;
	let dispose;
	let if_block0 = !/*rollImageReady*/ ctx[2] && create_if_block_1(ctx);
	let if_block1 = /*showControls*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			attr(div, "id", "roll-viewer");
			attr(div, "style", div_style_value = `--trackerbar-height: ${/*trackerbarHeight*/ ctx[4]}px;` + `--navigator-width: ${navigatorWidth}px`);
			attr(div, "class", "svelte-aepdni");
			toggle_class(div, "active-note-details", /*$userSettings*/ ctx[5].activeNoteDetails);
			toggle_class(div, "highlight-enabled-holes", /*$userSettings*/ ctx[5].highlightEnabledHoles);
			toggle_class(div, "show-note-velocities", /*$userSettings*/ ctx[5].showNoteVelocities);
			toggle_class(div, "use-roll-pedaling", /*$rollPedalingOnOff*/ ctx[6]);
			toggle_class(div, "play-expressions", /*$playExpressionsOnOff*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append(div, t);
			if (if_block1) if_block1.m(div, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "mouseenter", /*mouseenter_handler*/ ctx[15]),
					listen(div, "mouseleave", /*mouseleave_handler*/ ctx[16]),
					listen(div, "wheel", prevent_default(/*wheel_handler*/ ctx[17]), true)
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!/*rollImageReady*/ ctx[2]) {
				if (if_block0) {
					if (dirty[0] & /*rollImageReady*/ 4) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*showControls*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*showControls*/ 8) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*trackerbarHeight*/ 16 && div_style_value !== (div_style_value = `--trackerbar-height: ${/*trackerbarHeight*/ ctx[4]}px;` + `--navigator-width: ${navigatorWidth}px`)) {
				attr(div, "style", div_style_value);
			}

			if (dirty[0] & /*$userSettings*/ 32) {
				toggle_class(div, "active-note-details", /*$userSettings*/ ctx[5].activeNoteDetails);
			}

			if (dirty[0] & /*$userSettings*/ 32) {
				toggle_class(div, "highlight-enabled-holes", /*$userSettings*/ ctx[5].highlightEnabledHoles);
			}

			if (dirty[0] & /*$userSettings*/ 32) {
				toggle_class(div, "show-note-velocities", /*$userSettings*/ ctx[5].showNoteVelocities);
			}

			if (dirty[0] & /*$rollPedalingOnOff*/ 64) {
				toggle_class(div, "use-roll-pedaling", /*$rollPedalingOnOff*/ ctx[6]);
			}

			if (dirty[0] & /*$playExpressionsOnOff*/ 128) {
				toggle_class(div, "play-expressions", /*$playExpressionsOnOff*/ ctx[7]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

const defaultHoleColor = "60, 100%, 50%"; // yellow (default)
const controlHoleColor = "120, 73%, 75%"; // light green
const pedalHoleColor = "39, 100%, 50%"; // orange;
const navigatorWidth = 40;
const defaultZoomLevel = 1;
const minZoomLevel = 0.1;
const maxZoomLevel = 4;

function instance($$self, $$props, $$invalidate) {
	let scrollDownwards;
	let $rollMetadata;
	let $currentTick;
	let $playbackProgress;
	let $userSettings;
	let $rollPedalingOnOff;
	let $playExpressionsOnOff;
	component_subscribe($$self, rollMetadata, $$value => $$invalidate(13, $rollMetadata = $$value));
	component_subscribe($$self, currentTick, $$value => $$invalidate(14, $currentTick = $$value));
	component_subscribe($$self, playbackProgress, $$value => $$invalidate(26, $playbackProgress = $$value));
	component_subscribe($$self, userSettings, $$value => $$invalidate(5, $userSettings = $$value));
	component_subscribe($$self, rollPedalingOnOff, $$value => $$invalidate(6, $rollPedalingOnOff = $$value));
	component_subscribe($$self, playExpressionsOnOff, $$value => $$invalidate(7, $playExpressionsOnOff = $$value));
	let { imageUrl } = $$props;
	let { holesByTickInterval } = $$props;
	let { skipToTick } = $$props;

	// This is the "coolwarm" color map -- blue to red
	// RdYlBu (reversed) sort of works, but the yellows are too ambiguous
	// (values in H, S, L)
	const holeColorMap = [
		"232, 53%, 49%",
		"229, 64%, 58%",
		"225, 78%, 66%",
		"223, 91%, 73%",
		"221, 98%, 79%",
		"219, 95%, 83%",
		"217, 73%, 86%",
		"21, 28%, 86%",
		"20, 69%, 83%",
		"18, 85%, 79%",
		"16, 85%, 73%",
		"13, 80%, 67%",
		"9, 70%, 59%",
		"2, 59%, 51%",
		"348, 96%, 36%"
	];

	let openSeadragon;
	let viewport;
	let firstHolePx;
	let rollImageReady;
	let marks = [];
	let hoveredMark;
	let showControls;
	let imageLength;
	let imageWidth;
	let avgHoleWidth;
	let trackerbarHeight;
	let animationEaseInterval;
	let osdNavDisplayRegion;

	const annotateHoleData = holeData => {
		const velocities = holeData.map(({ v }) => v).filter(v => v);
		const minNoteVelocity = velocities.length ? Math.min(...velocities) : 64;
		const maxNoteVelocity = velocities.length ? Math.max(...velocities) : 64;
		const getNoteHoleColor = ({ v: velocity }) => holeColorMap[Math.round(mapToRange(normalizeInRange(velocity, minNoteVelocity, maxNoteVelocity), 0, holeColorMap.length - 1))];

		holeData.forEach(hole => {
			switch (getHoleType(hole, $rollMetadata.ROLL_TYPE)) {
				case "pedal":
					hole.color = pedalHoleColor;
					hole.type = "pedal";
					break;
				case "control":
					hole.color = controlHoleColor;
					hole.type = "control";
					break;
				case "note":
					hole.color = getNoteHoleColor(hole);
					hole.type = "note";
					break;
				default:
					hole.color = defaultHoleColor;
			}
		});
	};

	const createMark = hole => {
		const { x: offsetX, y: offsetY, w: width, h: height, m: midiKey, v: velocity, color: holeColor, type: holeType } = hole;
		const mark = document.createElement("mark");
		const holeLabel = getHoleLabel(midiKey, $rollMetadata.ROLL_TYPE);
		mark.dataset.holeLabel = holeLabel;
		if (holeType === "note") mark.dataset.noteVelocity = velocity || 64;
		mark.style.setProperty("--highlight-color", `hsl(${holeColor})`);
		mark.classList.add(holeType);

		mark.addEventListener("mouseout", () => {
			if (!marks.map(([_hole]) => _hole).includes(hole)) viewport.viewer.removeOverlay(hoveredMark);
		});

		const imgBounds = viewport.viewportToImageRectangle(viewport.getBounds());
		const markFractionalPosition = parseFloat(offsetX + width / 2 - imgBounds.x) / parseFloat(imgBounds.width);
		mark.classList.toggle("flag-left", markFractionalPosition > 0.8);

		const viewportRectangle = viewport.imageToViewportRectangle(
			offsetX - 4,
			scrollDownwards
			? offsetY - 4
			: imageLength - offsetY - height - 4,
			width + 11,
			height + 12
		);

		viewport.viewer.addOverlay(mark, viewportRectangle);
		return mark;
	};

	const createHolesOverlaySvg = () => {
		const { holeData } = $rollMetadata;
		if (!holeData) return;
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
		const entireViewportRectangle = viewport.imageToViewportRectangle(0, 0, imageWidth, imageLength);
		svg.setAttribute("width", imageWidth);
		svg.setAttribute("height", imageLength);
		svg.setAttribute("viewBox", `0 0 ${imageWidth} ${imageLength}`);
		svg.appendChild(g);

		holeData.forEach(hole => {
			const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			const { x: offsetX, y: offsetY, w: width, h: height, color: holeColor, type: holeType } = hole;
			const padding = 10;
			rect.setAttribute("x", offsetX - padding);

			rect.setAttribute("y", scrollDownwards
			? offsetY - padding
			: imageLength - offsetY - height - padding);

			rect.setAttribute("width", width + padding * 2);
			rect.setAttribute("height", height + padding * 2);
			rect.setAttribute("rx", 10);
			rect.setAttribute("ry", 10);

			rect.addEventListener("mouseover", () => {
				if (marks.map(([_hole]) => _hole).includes(hole)) return;
				viewport.viewer.removeOverlay(hoveredMark);
				hoveredMark = createMark(hole);
			});

			rect.setAttribute("fill", `hsla(${holeColor}, 0.8)`);
			rect.setAttribute("class", holeType);
			g.appendChild(rect);
		});

		viewport.viewer.addOverlay(svg, entireViewportRectangle);
	};

	const highlightHoles = tick => {
		if (!openSeadragon) return;
		const holes = holesByTickInterval.search(tick, tick);

		marks = marks.filter(([hole, elem]) => {
			if (holes.includes(hole)) return true;
			viewport.viewer.removeOverlay(elem);
			return false;
		});

		holes.forEach(hole => {
			if (marks.map(([_hole]) => _hole).includes(hole)) return;
			const mark = createMark(hole);
			mark.classList.add("active");
			marks.push([hole, mark]);
		});
	};

	// Pan the viewer to bring the position of `@tick` to the center of
	//  the viewport.  Does not trigger an OSD `pan` event.
	const updateViewportFromTick = tick => {
		if (!openSeadragon) return;
		const linePx = firstHolePx + (scrollDownwards ? tick : -tick);
		const lineViewport = viewport.imageToViewportCoordinates(0, linePx);
		viewport.centerSpringY.springTo(lineViewport.y);
		osdNavDisplayRegion.dataset.label = ($playbackProgress * 100).toFixed(1);

		osdNavDisplayRegion.classList.toggle("label-above", scrollDownwards
		? $playbackProgress > 0.5
		: $playbackProgress < 0.5);
	};

	// Updates the application position by an amount proportional to the
	//  current size of the viewport, in a direction specified by `@up`.
	// Pans the viewer only indirectly by virtue of updating `$currentTick`.
	const updateTickByViewportIncrement = (up = true) => {
		const viewportBounds = viewport.getBounds();
		const imgBounds = viewport.viewportToImageRectangle(viewportBounds);
		const delta = up ? imgBounds.height / 200 : -imgBounds.height / 200;
		const centerY = imgBounds.y + imgBounds.height / 2;

		skipToTick(scrollDownwards
		? clamp(centerY + delta - firstHolePx, -firstHolePx, imageLength - firstHolePx)
		: clamp(firstHolePx - centerY - delta, firstHolePx - imageLength, firstHolePx));
	};

	// Updates the application position to reflect the current position of
	//  the viewport.
	// Pans the viewer only indirectly by virtue of updating `$currentTick`.
	// If `@animate` is passed, vertical panning is animated, but the
	//  `animationTime` for the OSD spring animation is reduced over time
	//  until it returns to zero (no animation).
	const updateTickFromViewport = animate => {
		clearInterval(animationEaseInterval);

		if (animate) {
			const { centerSpringY } = viewport;
			centerSpringY.animationTime = 1.2;

			animationEaseInterval = setInterval(
				() => {
					centerSpringY.animationTime = Math.max(centerSpringY.animationTime - 0.1, 0);

					if (centerSpringY.animationTime <= 0) {
						clearInterval(animationEaseInterval);
					}
				},
				100
			);
		}

		const viewportCenter = viewport.getCenter(false);
		const imgCenter = viewport.viewportToImageCoordinates(viewportCenter);

		skipToTick(scrollDownwards
		? clamp(imgCenter.y - firstHolePx, -firstHolePx, imageLength - firstHolePx)
		: clamp(firstHolePx - imgCenter.y, firstHolePx - imageLength, firstHolePx));
	};

	onMount(async () => {
		$$invalidate(0, openSeadragon = OpenSeadragon({
			id: "roll-viewer",
			showNavigationControl: false,
			panHorizontal: true,
			visibilityRatio: 1,
			defaultZoomLevel,
			minZoomLevel,
			maxZoomLevel,
			constrainDuringPan: true,
			preserveImageSizeOnResize: true,
			gestureSettingsMouse: { clickToZoom: false, scrollToZoom: false },
			showNavigator: true,
			navigatorAutoFade: false,
			navigatorPosition: "ABSOLUTE",
			navigatorTop: "0px",
			navigatorLeft: `calc(100% - ${navigatorWidth}px)`,
			navigatorHeight: "100%",
			navigatorWidth: `${navigatorWidth}px`,
			navigatorDisplayRegionColor: "transparent",
			animationTime: 0
		}));

		const { navigator } = openSeadragon;
		$$invalidate(1, { viewport } = openSeadragon, viewport);
		({ displayRegion: osdNavDisplayRegion } = navigator);

		// Directly set some OSD internals that aren't exposed in the constructor
		$$invalidate(1, viewport.zoomSpring.animationTime = 1.2, viewport);

		$$invalidate(1, viewport.centerSpringX.animationTime = 1.2, viewport);
		$$invalidate(1, viewport.centerSpringY.animationTime = 0, viewport);
		navigator.panHorizontal = false;

		// Override some styles that OSD sets directly on the elements
		navigator.element.style.border = "none";

		navigator.element.parentElement.style.backgroundColor = "#666";

		Object.assign(osdNavDisplayRegion.style, {
			display: "block",
			border: "none",
			overflow: "visible",
			left: "0",
			width: "100%",
			backgroundColor: "rgba(255 255 255 / .6)",
			boxShadow: "0 0 4px var(--primary-accent)"
		});

		// Monkey-patch the navigator.update method to prevent the displayRegion element
		//  being resized to reflect the horizontal dimension of the viewport
		navigator.update = mainViewport => {
			// reimplemented based on
			// https://github.com/openseadragon/openseadragon/blob/6cb2c9e7bc4adebe28e386a093890a6c3e353c6b/src/navigator.js#L342-L393
			const { viewport: navViewport, displayRegion: { style }, totalBorderWidths } = navigator;

			if (mainViewport && navViewport) {
				const bounds = viewport.getBoundsNoRotate(true);
				const topleft = navViewport.pixelFromPointNoRotate(bounds.getTopLeft(), false);
				const bottomright = navViewport.pixelFromPointNoRotate(bounds.getBottomRight(), false).minus(totalBorderWidths);
				style.top = `${Math.round(topleft.y)}px`;
				style.height = `${Math.abs(topleft.y - bottomright.y)}px`;
			}
		};

		// OSD event handlers
		// on open, configure an event listener for when the images arrive
		//  from the SDR
		openSeadragon.addHandler("open", () => {
			const tiledImage = viewport.viewer.world.getItemAt(0);
			tiledImage.addOnceHandler("fully-loaded-change", () => $$invalidate(2, rollImageReady = true));
		});

		// create the holes overlay SVG and "rewind" to the beginning of the
		//  performance when the viewport updates for the first time
		openSeadragon.addOnceHandler("update-viewport", () => {
			createHolesOverlaySvg();
			updateViewportFromTick(0);
		});

		// update the height of the tracker bar when the zoom changes
		openSeadragon.addHandler("zoom", ({ zoom }) => {
			const imageZoom = viewport.viewportToImageZoom(zoom);
			$$invalidate(4, trackerbarHeight = Math.max(1, avgHoleWidth * imageZoom));
		});

		// re-implement some default OSD interactions to apply our own constraints
		//  and sidestep some interaction effects
		openSeadragon.addHandler("canvas-drag", event => {
			event.preventDefaultAction = true;
			const center = new OpenSeadragon.Point(viewport.centerSpringX.target.value, viewport.centerSpringY.target.value);
			const verticalBound = navigator.viewport.imageToViewportCoordinates(new OpenSeadragon.Point(0, imageLength));
			const delta = viewport.deltaPointsFromPixels(event.delta.negate());
			$$invalidate(1, viewport.centerSpringX.target.value += delta.x, viewport);
			if (viewport.getBounds().x !== viewport.getConstrainedBounds().x) delta.x = 0;
			const target = center.plus(delta);
			viewport.centerSpringX.springTo(target.x);
			viewport.centerSpringY.springTo(clamp(target.y, 0, verticalBound.y));

			updateTickFromViewport(/* animate = */
			true);
		});

		openSeadragon.addHandler("navigator-click", event => {
			event.preventDefaultAction = true;
			if (!event.quick) return;
			const target = navigator.viewport.pointFromPixel(event.position);
			viewport.centerSpringY.springTo(target.y);

			updateTickFromViewport(/* animate = */
			true);
		});

		openSeadragon.addHandler("navigator-drag", event => {
			event.preventDefaultAction = true;
			const center = new OpenSeadragon.Point(0, viewport.centerSpringY.target.value);
			const target = center.plus(navigator.viewport.deltaPointsFromPixels(event.delta));
			const verticalBound = navigator.viewport.imageToViewportCoordinates(new OpenSeadragon.Point(0, imageLength));
			viewport.centerSpringY.springTo(clamp(target.y, 0, verticalBound.y));

			updateTickFromViewport(/* animate = */
			false);
		});

		navigator.innerTracker.releaseHandler = () => {
			
		}; // The releaseHandler for navigator viewports is delegated to an
		//  `onCanvasRelease` function (see
		//  https://github.com/openseadragon/openseadragon/blob/master/src/navigator.js#L586-L590 )
		//  which calls viewport.applyConstraints() whether constraints are

		//  wanted or not.  Since that's literally all it does (and we don't want
		//  constraints applied here), we'll just neuter it here.
		openSeadragon.open(imageUrl);
	});

	const mouseenter_handler = () => $$invalidate(3, showControls = true);
	const mouseleave_handler = () => $$invalidate(3, showControls = false);

	const wheel_handler = event => {
		if (event.ctrlKey) {
			updateTickByViewportIncrement(/* up = */ event.deltaY > 0);
			event.stopPropagation();
			return;
		}

		viewport.zoomTo(Math.min(viewport.getZoom() * (event.deltaY > 0 ? 0.9 : 1.1), maxZoomLevel));
	};

	$$self.$$set = $$props => {
		if ('imageUrl' in $$props) $$invalidate(9, imageUrl = $$props.imageUrl);
		if ('holesByTickInterval' in $$props) $$invalidate(10, holesByTickInterval = $$props.holesByTickInterval);
		if ('skipToTick' in $$props) $$invalidate(11, skipToTick = $$props.skipToTick);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$currentTick*/ 16384) {
			$: updateViewportFromTick($currentTick);
		}

		if ($$self.$$.dirty[0] & /*$currentTick*/ 16384) {
			$: highlightHoles($currentTick);
		}

		if ($$self.$$.dirty[0] & /*$rollMetadata*/ 8192) {
			$: annotateHoleData($rollMetadata.holeData);
		}

		if ($$self.$$.dirty[0] & /*$rollMetadata*/ 8192) {
			$: $$invalidate(12, scrollDownwards = $rollMetadata.ROLL_TYPE === "welte-red");
		}

		if ($$self.$$.dirty[0] & /*$rollMetadata*/ 8192) {
			$: imageLength = parseInt($rollMetadata.IMAGE_LENGTH, 10);
		}

		if ($$self.$$.dirty[0] & /*$rollMetadata*/ 8192) {
			$: imageWidth = parseInt($rollMetadata.IMAGE_WIDTH, 10);
		}

		if ($$self.$$.dirty[0] & /*$rollMetadata*/ 8192) {
			$: avgHoleWidth = parseInt($rollMetadata.AVG_HOLE_WIDTH, 10);
		}

		if ($$self.$$.dirty[0] & /*scrollDownwards, $rollMetadata*/ 12288) {
			$: firstHolePx = scrollDownwards
			? parseInt($rollMetadata.FIRST_HOLE, 10)
			: parseInt($rollMetadata.IMAGE_LENGTH, 10) - parseInt($rollMetadata.FIRST_HOLE, 10);
		}
	};

	return [
		openSeadragon,
		viewport,
		rollImageReady,
		showControls,
		trackerbarHeight,
		$userSettings,
		$rollPedalingOnOff,
		$playExpressionsOnOff,
		updateTickByViewportIncrement,
		imageUrl,
		holesByTickInterval,
		skipToTick,
		scrollDownwards,
		$rollMetadata,
		$currentTick,
		mouseenter_handler,
		mouseleave_handler,
		wheel_handler
	];
}

class RollViewer extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				imageUrl: 9,
				holesByTickInterval: 10,
				skipToTick: 11
			},
			null,
			[-1, -1]
		);
	}
}

export default RollViewer;