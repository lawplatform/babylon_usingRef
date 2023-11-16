"use client"
import SceneContainer from '@/src/Scene_Container'
import Monkey from '@/src/monkey';
import { AbstractMesh, Nullable } from '@babylonjs/core';
import Image from 'next/image'
import { useRef } from 'react';

export default function Home() {
	const modelRef = useRef(null);
	function Click() {

		console.log("click");
		//can I access child props by ref? 
		console.log(modelRef.current);
	}
	return (
		<div>
			<SceneContainer>
				<Monkey ref={modelRef} />
			</SceneContainer>
			<button onClick={Click}>click event henadler</button>
		</div>
	)
}
