// Chester Holt
// Gayle Torres
// Angelina Adkins
// Elmer Love
// Sheri Gonzalez
// Albert Guzman
// Beth Bryan
// Alton Mullins
// Wilson Adkins
// Sophie Mcdonald
// Robert Patton
// Henry Perry
// Marlon Ford
// Adrian Newman
// Tomas Garrett
// Pat Welch
// Christina Dennis
// Glenn Chandler


var customerData = {
	interview: {
		1: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: true,
			name: 'Chester Holt',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'ChesterHolt@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: false,
			name: 'Jessie Meyer',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'meyer234@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: true,
			name: 'Carlton Luna',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: false,
			name: 'Gayle Torres',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		}

	},
	pricing: {
		1: {
			new: false,
			commercial: true,
			name: 'ABC Trucking',
			applicantName: "Gayle Torres",
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'gt234089@aol.com'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: false,
			name: 'Beth Bryan',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'beth_first@verizon.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: true,
			name: 'Alton Mullins',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: true,
			name: 'Alexander Remington',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		}
	},
	presentation: {
		1: {
			new: false,
			commercial: true,
			name: 'ABC Corp',
			applicantName: "Albert Guzman",
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'albertg@corpevents.com'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: true,
			name: 'Angelina Adkins',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'angelina_adkins@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: true,
			name: ' Albert Guzman',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: false,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: true,
			name: 'Alexander Remington',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		}
	},
	decision: {
		1: {
			new: true,
			name: 'Alton Mullins',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: true,
			name: ' Sheri Gonzalez',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: false,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: true,
			name: 'Alexander Remington',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		}
	},
	fulfillment: {
		1: {
			new: true,
			name: 'Glenn Chandler',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: false,
			name: 'Christina Dennis',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: true,
			name: 'Alexander Remington',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Auto - Personal"],
			agentName: 'May Lei'
		}
	},
	hold: {
		1: {
			new: false,
			name: 'Alton Mullins',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		},
		2: {
			new: false,
			name: 'Robert Patton',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: false,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		},
		3: {
			new: false,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		},
		4: {
			new: true,
			name: 'Alexander Remington',
			vip: true,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		},
		5: {
			new: true,
			name: 'Alexander Remington',
			vip: false,
			amount: '$2,500',
			primaryContact: {
				phone: true,
				number: '214-678-2099',
				email: 'alexander.remington@southwesternbell.net'
			},
			lastContact: {
				days: 6
			},
			note: {
				info: 'Has 3 cars. Wants different coverage for each. Looking for etc.'
			},
			lob: ["Auto - Commercial", "Home", "Auto - Personal"],
			agentName: 'May Lei'
		}
	}
};