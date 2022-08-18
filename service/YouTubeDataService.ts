import CardContent from '../interfaces/CardContent'
import CoursesYoutubeData from '../interfaces/CoursesYoutubeData'
import EpisodeCardContent from '../interfaces/EpisodeCardContents'
import EpisodesYoutubeData from '../interfaces/EpisodesYoutubeData'
import convertToSlug from '../utils/convertToSlug'

const baseUrl = 'https://www.googleapis.com/youtube/v3'

export const getCoursesList = async (
	channelId = 'UC3N9i_KvKZYP4F84FPIzgPQ'
): Promise<CardContent[]> => {
	const response = await fetch(
		`${baseUrl}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=50&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
	)

	const data: CoursesYoutubeData = await response.json()
	console.log(data)
	return data.items.map((item) => {
		return {
			id: item.id,
			title: item.snippet.title,
			courseUrl: `/courses/${convertToSlug(item.snippet.title)}`,
			imageUrl: item.snippet.thumbnails.medium.url,
			description: item.snippet.description,
			episodeCount: item.contentDetails.itemCount,
			author: item.snippet.channelTitle,
		}
	})
}

export const getEpisodesList = async (
	playlistId: string
): Promise<EpisodeCardContent[]> => {
	const response = await fetch(
		`${baseUrl}/playlistItems/?part=snippet&playlistId=${playlistId}&maxResults=50&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
	)
	const data: EpisodesYoutubeData = await response.json()

	return data.items.map((episode, i) => {
		return {
			title: episode.snippet.title,
			description: episode.snippet.description,
			imgUrl: episode.snippet.thumbnails.medium.url,
			episodeId: episode.snippet.resourceId.videoId,
			episodeNumber: i + 1,
		}
	})
}

export const getExistingCoursesList = (): CardContent[] => {
	return [
		{
			id: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
			title: 'Namaste 🙏 JavaScript',
			courseUrl: '/courses/namaste-javascript',
			imageUrl: 'https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg',
			author: 'Akshay Saini',
			description:
				"Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.\n\nHere's in full Playlist of this course.\nDon't miss any video and watch it in sequence.  🙏\n\nNamaste Javascript Video tutorials will dive deep into JavaScript and the internals of how code is executed under the hood. If you understand the core fundamentals of JavaScript, it will help you become a better developer. You will exactly know how things are working and won't run into unexpected errors.\n\nNamaste JavaScript Video Course will be 100% free and will be released on Youtube. The playlist will be updated with new JavaScript tutorial videos every week. The plan is to cover all the important concepts in JS including the tricky ones like Closures, Prototypal Inheritance, Promise, Event Loop.\n\nNamaste JavaScript course videos will also focus on things that are asked in the interviews. So if you're preparing for a Frontend Developer Interview or Web Developer Interview. This will be the best place to get a good grasp of JS internals.\n\nSupport this course, NOT BY MONEY, but by spreading these free tutorial videos in your network. 😇 \nI'll give my best to come up with great content and everything absolutely for free on YouTube. 😊\n\nIf you like this course, please give a shoutout with #NamasteJS on social media. 🙏\n\nCheers, \nAkshay Saini",
			episodeCount: 23,
		},
		{
			id: 'PLlasXeu85E9fIfUOZTRAmjpHMqlfvyE9y',
			title: 'Data Structures in Javascript',
			courseUrl: '/courses/data-structures-in-javascript',
			imageUrl: 'https://i.ytimg.com/vi/4u--XDffIZM/mqdefault.jpg',
			author: 'Akshay Saini',
			description: '',
			episodeCount: 1,
		},
		{
			id: 'PLlasXeu85E9fkCH4XgL2GEh0Bd1IHEaGL',
			title: 'Cracking the Frontend Interview',
			courseUrl: '/courses/cracking-the-frontend-interview',
			imageUrl: 'https://i.ytimg.com/vi/VHnILgmErM4/mqdefault.jpg',
			author: 'Akshay Saini',
			description:
				'This video series will help you crack your upcoming Web Developer Interview for companies like Google, Uber, Microsoft, Amazon, Flipkart and others.\nStay tuned and watch each and every video to get the knowledge required to ace in Interviews.',
			episodeCount: 8,
		},
		{
			id: 'PLlasXeu85E9dTWQwFRV84Y-e9PCMeCk8A',
			title: 'Tips & Tricks',
			courseUrl: '/courses/tips-tricks',
			imageUrl: 'https://i.ytimg.com/vi/eSh8vhKq0q8/mqdefault.jpg',
			author: 'Akshay Saini',
			description:
				'Covering Job Tips and Tricks including preparation of a strong impressive resume,  tips for getting a job through LinkedIn, or getting a job off-campus for freshers and all some tips for Campus Placement Interviews',
			episodeCount: 10,
		},
		{
			id: 'PLlasXeu85E9ef4G2RuyDK3Qqbwmk_UH3a',
			title: 'Interview Experience - Software Engineer',
			courseUrl: '/courses/interview-experience-software-engineer',
			imageUrl: 'https://i.ytimg.com/vi/4u--XDffIZM/mqdefault.jpg',
			author: 'Akshay Saini',
			description: '',
			episodeCount: 11,
		},
		{
			id: 'PLlasXeu85E9fb5H-x4uZFp8-HDyNzLulu',
			title: 'QnA with Akshay',
			courseUrl: '/courses/qna-with-akshay',
			imageUrl: 'https://i.ytimg.com/vi/F2YxXv91GqM/mqdefault.jpg',
			author: 'Akshay Saini',
			description: '',
			episodeCount: 9,
		},
		{
			id: 'PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks',
			title: 'Core Javascript Fundamentals',
			courseUrl: '/courses/core-javascript-fundamentals',
			imageUrl: 'https://i.ytimg.com/vi/ke_y6z0xRpk/mqdefault.jpg',
			author: 'Akshay Saini',
			description:
				'Covering all important concepts of Javascript and understand how JS actually works under the hood. These are really very important topics for Web / UI Engineer or Frontend Developer Interviews.',
			episodeCount: 13,
		},
		{
			id: 'PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0',
			title: 'Frontend Interview Questions',
			courseUrl: '/courses/frontend-interview-questions',
			imageUrl: 'https://i.ytimg.com/vi/vQcCNpuaJO8/mqdefault.jpg',
			author: 'Akshay Saini',
			description: '',
			episodeCount: 16,
		},
	]
}
