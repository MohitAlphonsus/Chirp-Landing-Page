import styled from 'styled-components';
import twitterIcon from '../assets/Twitter.svg';
import heroImg from '../assets/Hero Image (Desktop View).png';
import {
	userAvatar01,
	userAvatar02,
	userAvatar03,
	userAvatar04,
	userAvatar05,
	userAvatar06,
	userAvatar07,
	userAvatar08,
	userAvatar09,
} from '../assets';

const Header = () => {
	return (
		<HeaderSection>
			<TextContentBox>
				<h1>Twitter analytics taken to a whole new level.</h1>
				<p>
					Chirp is a suite of Twitter analytics that will help you better
					understand your audience, which tweets they like, and most
					importantly, when they are the most active on Twiiter.
				</p>

				<ButtonsWrapper>
					<Button>
						<img src={twitterIcon} alt="twitter icon" />
						<span>Sign in with Twitter</span>
					</Button>
					<Link href="#">Learn More &rarr;</Link>
				</ButtonsWrapper>

				<UserImages>
					<img src={userAvatar01} alt="user-photo" />
					<img src={userAvatar02} alt="user-photo" />
					<img src={userAvatar03} alt="user-photo" />
					<img src={userAvatar04} alt="user-photo" />
					<img src={userAvatar05} alt="user-photo" />
					<img src={userAvatar06} alt="user-photo" />
					<img src={userAvatar07} alt="user-photo" />
					<img src={userAvatar08} alt="user-photo" />
					<img src={userAvatar09} alt="user-photo" />
				</UserImages>

				<p>
					Join <strong>195</strong> others who have analyzed their followers and
					scheduled <strong>1342 </strong>
					tweets!
				</p>
			</TextContentBox>
			<ImageFigure>
				<img src={heroImg} alt="hero-img" />
			</ImageFigure>
		</HeaderSection>
	);
};

export default Header;

const HeaderSection = styled.header`
	height: 100vh;
	background-color: #fbf8f3;
	padding: 4rem 0 4rem 8%;
	display: flex;
	align-items: center;
`;

const TextContentBox = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h1 {
		font-size: 6rem;
		line-height: 1.1;
	}

	p {
		color: #8b8a8a;
		line-height: 1.6;

		strong {
			color: #1f7898;
		}
	}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const Button = styled.button`
	border: none;
	padding: 1.2rem 2rem;
	border-radius: 5px;
	background-color: #1da1f2;
	display: flex;
	font: inherit;
	font-size: 1.4rem;
	color: #fff;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	transition: all 0.2s ease-in;

	&:hover {
		background-color: #37abf2;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: #1f7898;
	font-weight: 500;
	border-bottom: 1px solid transparent;
	transition: all 0.2s ease-in;

	&:hover {
		border-bottom: 1px solid currentColor;
		letter-spacing: 1px;
	}
`;

const UserImages = styled.div`
	img:not(:first-child) {
		margin-left: -2rem;
	}
`;

const ImageFigure = styled.figure`
	width: 50%;
	align-self: stretch;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
