import React from 'react'

export default function Layout({ title, children }) {
	return (
		<html lang='en'>
			<head>
				<title>{title}</title>
				<link href='/style.css' rel='stylesheet' />
			</head>
			<body>
				<main className='container mx-auto p-4 max-w-3xl'>
					<div className='flex gap-2 justify-between py-2'>
						<div>
							{Array(3)
								.fill(1)
								.map((_, i) => (
									<i key={i} className='nes-icon is-medium heart'></i>
								))}
							<i className='nes-icon is-medium heart is-half'></i>
						</div>
						<div>
							<a href='https://github.com/xiaoxinghu'>
								<i className='nes-icon is-medium github'></i>
							</a>
						</div>
					</div>
					<div className='nes-container with-title my-4'>
						<p className='title'>WELCOME</p>
						{children}
					</div>
				</main>
			</body>
		</html>
	)
}
