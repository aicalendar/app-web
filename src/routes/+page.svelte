<div class="main">
	<div class="wrapper">
		<div class="left-side">
			<div class="upper-text">
				<h2>Welcome</h2>
				<p>Login to your AICalendar app</p>
			</div>
		</div>
		<div class="right-side">Ddada</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');

	.main {
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-family: Arimo;
		.wrapper {
			display: flex;
			width: 60%;
			height: 420px;
			.left-side {
				background-color: #09090b;
				width: 50%;
				height: 100%;
				border-radius: 12px 0px 0px 12px;
				color: white;
				.upper-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					h2 {
						margin: 24px 0px 0px 0px;
					}
					p {
						color: #a1a1aa;
					}
				}
			}
			.right-side {
				background-color: #18181b;
				width: 50%;
				height: 100%;
				border-radius: 0px 12px 12px 0px;
			}
		}
	}
</style>
