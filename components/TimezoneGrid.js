import moment from 'moment-timezone'
import TimeCard from './TimeCard'

export default ({ date }) => {
	const timezones = {
		'America/New_York': 'Boston',
		'America/Chicago': 'Wisconsin',
		'America/Los_Angeles': 'San Francisco',
		'Asia/Kolkata': 'India',
	};

	return (
		<div>
			{Object.keys(timezones).map((tz, i) => {
				let momentDate = moment(date)
				let tzd = moment(date).tz(tz)

				let cd = parseInt(momentDate.format('D'))
				let fd = parseInt(tzd.format('D'))

				let diff = fd - cd

				let normalizedCity = timezones[tz]

				return (
					<TimeCard
						key={i}
						name={normalizedCity}
						time={tzd.format('h:mm A')}
						days={diff}
						tz={tz}
					/>
				)
			})}
			<style jsx>
				{`
					@media (min-width: 36rem) {
						div {
							grid-template-columns: repeat(3, 1fr) !important;
						}
					}
					div {
						display: grid;
						grid-gap: 0.5rem;
						grid-template-columns: 1fr;
					}
				`}
			</style>
		</div>
	)
}
