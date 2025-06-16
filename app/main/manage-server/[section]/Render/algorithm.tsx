'use client';

import {
	CheckboxType,
	ContainerCol2Type,
	DefContainerType,
	DefTextInpType,
	ExtandableInpType,
	FileInputType,
	SectionType,
	SelectType
} from '@/app/lib/axios/apiSchemas';
import { components } from './constants';
import React, { memo, ReactNode, useId } from 'react';

type UniNode =
	| SectionType
	| SelectType
	| CheckboxType
	| DefTextInpType
	| ExtandableInpType
	| DefContainerType
	| FileInputType
	| ContainerCol2Type;

export const RenderNode = memo(function({
	node
}: {
	node: UniNode;
}): ReactNode {
	let children: ReactNode;

	if (
		node.type === 'Section' ||
		node.type === 'DefContainer' ||
		node.type === 'Container2'
	) {
		const rawChildren = node.children;

		if (Array.isArray(rawChildren)) {
			children = rawChildren.map(child => (
				<RenderNode node={child} key={crypto.randomUUID()} /> // we cannot use here hook as it consequences in error;
			));
		} else {
			children = <RenderNode node={rawChildren} />;
		}
	}

	const Component = components[node.type];

	return <Component key={useId()} {...(node as any)} children={children} />;
});
