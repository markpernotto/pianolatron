import './KeyboardControls.svelte.css.proxy.js';
/* src/components/KeyboardControls.svelte generated by Svelte v3.41.0 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	component_subscribe,
	create_bidirectional_transition,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_store_value,
	set_style,
	space,
	svg_element,
	toggle_class
} from "../_snowpack/pkg/svelte/internal.js";

import { fade } from "../_snowpack/pkg/svelte/transition.js";
import { showKeyboard, overlayKeyboard } from "../stores.js";

function create_else_block_1(ctx) {
	let path;

	return {
		c() {
			path = svg_element("path");
			attr(path, "d", "M10 21l2 -2l2 2");
		},
		m(target, anchor) {
			insert(target, path, anchor);
		},
		d(detaching) {
			if (detaching) detach(path);
		}
	};
}

// (71:6) {#if $showKeyboard}
function create_if_block_2(ctx) {
	let path;

	return {
		c() {
			path = svg_element("path");
			attr(path, "d", "m 10,19.000041 2,2 2,-2");
		},
		m(target, anchor) {
			insert(target, path, anchor);
		},
		d(detaching) {
			if (detaching) detach(path);
		}
	};
}

// (78:2) {#if !outside}
function create_if_block(ctx) {
	let button;
	let mounted;
	let dispose;

	function select_block_type_1(ctx, dirty) {
		if (/*$overlayKeyboard*/ ctx[2]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			button = element("button");
			if_block.c();
			attr(button, "class", "svelte-8m4lb4");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			if_block.m(button, null);

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler_1*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (current_block_type !== (current_block_type = select_block_type_1(ctx, dirty))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(button, null);
				}
			}
		},
		d(detaching) {
			if (detaching) detach(button);
			if_block.d();
			mounted = false;
			dispose();
		}
	};
}

// (99:6) {:else}
function create_else_block(ctx) {
	let svg;
	let path0;
	let rect;
	let line;
	let path1;

	return {
		c() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			rect = svg_element("rect");
			line = svg_element("line");
			path1 = svg_element("path");
			attr(path0, "d", "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4");
			attr(rect, "x", "14");
			attr(rect, "y", "14");
			attr(rect, "width", "7");
			attr(rect, "height", "5");
			attr(rect, "rx", "1");
			attr(line, "x1", "7");
			attr(line, "y1", "9");
			attr(line, "x2", "11");
			attr(line, "y2", "13");
			attr(path1, "d", "M7 12v-3h3");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke", "currentColor");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path0);
			append(svg, rect);
			append(svg, line);
			append(svg, path1);
		},
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

// (80:6) {#if $overlayKeyboard}
function create_if_block_1(ctx) {
	let svg;
	let path0;
	let rect;
	let line;
	let path1;

	return {
		c() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			rect = svg_element("rect");
			line = svg_element("line");
			path1 = svg_element("path");
			attr(path0, "d", "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4");
			attr(rect, "x", "14");
			attr(rect, "y", "14");
			attr(rect, "width", "7");
			attr(rect, "height", "5");
			attr(rect, "rx", "1");
			attr(line, "x1", "7");
			attr(line, "y1", "9");
			attr(line, "x2", "11");
			attr(line, "y2", "13");
			attr(path1, "d", "M8 13h3v-3");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke", "currentColor");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path0);
			append(svg, rect);
			append(svg, line);
			append(svg, path1);
		},
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let button;
	let svg;
	let path;
	let rect;
	let line0;
	let line1;
	let line2;
	let t;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*$showKeyboard*/ ctx[1]) return create_if_block_2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = !/*outside*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			button = element("button");
			svg = svg_element("svg");
			path = svg_element("path");
			rect = svg_element("rect");
			line0 = svg_element("line");
			line1 = svg_element("line");
			line2 = svg_element("line");
			if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			attr(path, "stroke", "none");
			attr(path, "d", "M0 0h24v24H0z");
			attr(path, "fill", "none");
			attr(rect, "x", "2");
			attr(rect, "y", "3");
			attr(rect, "width", "20");
			attr(rect, "height", "12");
			attr(rect, "rx", "2");
			attr(line0, "x1", "7");
			attr(line0, "y1", "5");
			attr(line0, "x2", "7");
			attr(line0, "y2", "9.5");
			attr(line0, "id", "line18");
			set_style(line0, "stroke-width", "2.5");
			set_style(line0, "stroke-linecap", "square");
			attr(line1, "x1", "12");
			attr(line1, "y1", "5");
			attr(line1, "x2", "12");
			attr(line1, "y2", "9.5");
			set_style(line1, "stroke-width", "2.5");
			set_style(line1, "stroke-linecap", "square");
			attr(line2, "x1", "17");
			attr(line2, "y1", "5");
			attr(line2, "x2", "17");
			attr(line2, "y2", "9.5");
			set_style(line2, "stroke-width", "2.5");
			set_style(line2, "stroke-linecap", "square");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke", "currentColor");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
			attr(svg, "version", "1.1");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "xmlns:svg", "http://www.w3.org/2000/svg");
			attr(button, "class", "svelte-8m4lb4");
			attr(div, "class", "overlay-buttons svelte-8m4lb4");
			toggle_class(div, "outside", /*outside*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, button);
			append(button, svg);
			append(svg, path);
			append(svg, rect);
			append(svg, line0);
			append(svg, line1);
			append(svg, line2);
			if_block0.m(svg, null);
			append(div, t);
			if (if_block1) if_block1.m(div, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (current_block_type !== (current_block_type = select_block_type(ctx, dirty))) {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(svg, null);
				}
			}

			if (!/*outside*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*outside*/ 1) {
				toggle_class(div, "outside", /*outside*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching && div_transition) div_transition.end();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $showKeyboard;
	let $overlayKeyboard;
	component_subscribe($$self, showKeyboard, $$value => $$invalidate(1, $showKeyboard = $$value));
	component_subscribe($$self, overlayKeyboard, $$value => $$invalidate(2, $overlayKeyboard = $$value));
	let { outside } = $$props;
	const click_handler = () => set_store_value(showKeyboard, $showKeyboard = !$showKeyboard, $showKeyboard);
	const click_handler_1 = () => set_store_value(overlayKeyboard, $overlayKeyboard = !$overlayKeyboard, $overlayKeyboard);

	$$self.$$set = $$props => {
		if ('outside' in $$props) $$invalidate(0, outside = $$props.outside);
	};

	return [outside, $showKeyboard, $overlayKeyboard, click_handler, click_handler_1];
}

class KeyboardControls extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { outside: 0 });
	}
}

export default KeyboardControls;