import './Notification.svelte.css.proxy.js';
/* src/ui-components/Notification.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	component_subscribe,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "../_snowpack/pkg/svelte/internal.js";

import { writable } from "../_snowpack/pkg/svelte/store.js";

function create_if_block(ctx) {
	let div1;
	let section;
	let t0;
	let p;
	let t1_value = /*$NotificationStore*/ ctx[0].message + "";
	let t1;
	let t2;
	let div0;
	let div1_class_value;
	let mounted;
	let dispose;
	let if_block = /*$NotificationStore*/ ctx[0].title && create_if_block_1(ctx);

	return {
		c() {
			div1 = element("div");
			section = element("section");
			if (if_block) if_block.c();
			t0 = space();
			p = element("p");
			t1 = text(t1_value);
			t2 = space();
			div0 = element("div");
			div0.textContent = "×";
			attr(p, "class", "svelte-1x048n2");
			attr(section, "class", "svelte-1x048n2");
			attr(div0, "class", "close svelte-1x048n2");
			attr(div1, "class", div1_class_value = "notification " + (/*$NotificationStore*/ ctx[0].type || "default") + " svelte-1x048n2");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, section);
			if (if_block) if_block.m(section, null);
			append(section, t0);
			append(section, p);
			append(p, t1);
			append(div1, t2);
			append(div1, div0);

			if (!mounted) {
				dispose = listen(div0, "click", /*click_handler*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*$NotificationStore*/ ctx[0].title) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(section, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*$NotificationStore*/ 1 && t1_value !== (t1_value = /*$NotificationStore*/ ctx[0].message + "")) set_data(t1, t1_value);

			if (dirty & /*$NotificationStore*/ 1 && div1_class_value !== (div1_class_value = "notification " + (/*$NotificationStore*/ ctx[0].type || "default") + " svelte-1x048n2")) {
				attr(div1, "class", div1_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

// (62:6) {#if $NotificationStore.title}
function create_if_block_1(ctx) {
	let header;
	let t_value = /*$NotificationStore*/ ctx[0].title + "";
	let t;

	return {
		c() {
			header = element("header");
			t = text(t_value);
			attr(header, "class", "svelte-1x048n2");
		},
		m(target, anchor) {
			insert(target, header, anchor);
			append(header, t);
		},
		p(ctx, dirty) {
			if (dirty & /*$NotificationStore*/ 1 && t_value !== (t_value = /*$NotificationStore*/ ctx[0].title + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(header);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*$NotificationStore*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*$NotificationStore*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

const NotificationStore = writable();
const notify = detail => NotificationStore.set(detail);

function instance($$self, $$props, $$invalidate) {
	let $NotificationStore;
	component_subscribe($$self, NotificationStore, $$value => $$invalidate(0, $NotificationStore = $$value));
	const click_handler = () => NotificationStore.set();
	return [$NotificationStore, click_handler];
}

class Notification extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Notification;
export { notify };