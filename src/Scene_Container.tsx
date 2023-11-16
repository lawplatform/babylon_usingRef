import { Color4, Vector3 } from '@babylonjs/core'
import { FC, ReactNode } from 'react';
import { Engine, Scene, Camera } from 'react-babylonjs'
//basic scene not include camera
const SceneContainer: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => (
	<div style={{ flex: 1, display: 'flex bg-transparent' }}>
		<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" renderOptions={{
			whenVisibleOnly: true,
		}} >
			<Scene
				clearColor={new Color4(0, 0, 0, 0)}>


				<hemisphericLight
					name="light1"
					intensity={1}
					direction={new Vector3(0, 1, 0)}
				/>
				<arcRotateCamera
					name="camera1"
					target={Vector3.Zero()}
					alpha={Math.PI / 2}
					beta={Math.PI / 4}
					radius={8}
					lowerRadiusLimit={6}
					upperRadiusLimit={10}
				/>

				{children}
			</Scene>
		</Engine>
	</div >
)


export default SceneContainer;
