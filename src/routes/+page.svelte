<div class="main">
	<div class="wrapper">
		<div class="left-side">D</div>
		<div class="right-side">Ddada</div>
	</div>
</div>

<style lang="scss">
	.main {
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100vh;
		.wrapper {
			display: flex;
			width: 60%;
			height: 420px;
			.left-side {
				background-color: #09090b;
				width: 50%;
				height: 100%;
				border-radius: 12px 0px 0px 12px;
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
