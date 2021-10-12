import { useLayoutEffect, useState } from 'react'

interface windowSize {
	height: number;
	width: number;
}

export function useWindowSize(): windowSize {

	const [size, setSize] = useState<[number, number]>([0, 0])
	useLayoutEffect(() => {

		function updateSize() {
			setSize([window.innerWidth, window.innerHeight])
		}

		window.addEventListener('resize', updateSize)
		updateSize()

		return () => window.removeEventListener('resize', updateSize)
	}, [])

	return ({
		width: size[0],
		height: size[1]
	})
}

export default useWindowSize