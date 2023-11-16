import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import React, { FC, Suspense, forwardRef, useEffect, useRef, useState } from 'react'
import { ILoadedModel, Model, useBeforeRender, useScene } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import { Nullable } from '@babylonjs/core';

const Monkey: FC = forwardRef((props, ref) => {
	const modelRef = useRef<Nullable<AbstractMesh>>(null);
	let baseUrl = '/glb/';
	const scene = useScene()
	const onModelLoaded = (model: ILoadedModel) => {
		//modelRef work well 
		modelRef.current = model.rootMesh!
		const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
		if (moveBack) {
			moveBack.stop();
		}
	}
	useEffect(() => {
		if (scene != null) {
		}
		if (modelRef.current) {
		}
	}, [])
	let alpha = 0;
	useBeforeRender(() => {
		if (!scene) return
		if (modelRef.current) {
		}

	})

	return (
		<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				//	ref= {modelRef}
				name="monkey"
				rootUrl={`${baseUrl}`}
				sceneFilename={`monkey.glb`}
				scaleToDimension={1}
				position={new Vector3(0, 0, 0)}
				onModelLoaded={onModelLoaded}
				scaling={new Vector3(0.5, 0.5, 0.5)}
			/>
		</Suspense >
	)
})

export default Monkey;
