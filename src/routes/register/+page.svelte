<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="main">
	<div class="wrapper">
		<div class="left-side">
			<div class="upper-text">
				<h2>Welcome</h2>
				<p>Create your new AICalendar account</p>
			</div>
			<form method="POST" action="?/register" use:enhance>
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Password
					<input name="password" type="password" />
				</label>
				<button>Sign up</button>
			</form>
			<div class="bottom-text">
				<div class="no-account">
					<p>Already have account?</p>
					<a href="/login">Sign in</a>
				</div>
				{#if form?.error}
					<div class="register-error">{form?.error}</div>
				{/if}
				{#if form?.success}
					<div class="register-success">User signed up successfully</div>
				{/if}
			</div>
		</div>
		<div class="right-side"></div>
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
			width: 720px;
			height: 480px;
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
						margin: 32px 0px 0px 0px;
					}
					p {
						color: #a1a1aa;
					}
				}
				form {
					margin: 0px 32px 0px 32px;
					margin-top: 12px;
					label {
						display: flex;
						flex-direction: column;
						margin-bottom: 28px;
						input {
							font-size: 14px;
							color: white;
							margin-top: 8px;
							padding: 8px 10px 8px 10px;
							background-color: #09090b;
							border: 1px solid #27272a;
							border-radius: 6px;
							&:focus-visible {
								outline: 2px solid #e4e4e7;
							}
						}
					}
					button {
						display: flex;
						font-size: 14px;
						justify-content: center;
						width: 100%;
						border-radius: 6px;
						padding: 8px 10px 8px 10px;
						background-color: white;
						border: none;
						&:hover {
							cursor: pointer;
							background-color: #e4e4e7;
						}
					}
				}
				.bottom-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-top: 8px;
					font-size: 14px;
					.no-account {
						display: flex;
						flex-direction: row;
						align-items: center;
						a {
							color: white;
							text-underline-offset: 4px;
							margin-left: 4px;
						}
					}
					.register-error {
						margin-top: 18px;
						color: #950606;
					}
					.register-success {
						color: green;
						margin-top: 18px;
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
