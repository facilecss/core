const colors = [
    {
        name: 'primary',
        shades: {
            default: '#ea4442',
            1: '#fce6e5',
            2: '#f6b3b2',
            3: '#f1817f',
            4: '#eb4e4d',
            5: '#e51c1a',
            6: '#b21614',
            7: '#7f100e',
            8: '#4c0909',
            9: '#3f0807',
        },
    },

    {
        name: 'secondary',
        shades: {
            default: '#f5f5f5',
            1: '#f2f2f2',
            2: '#d9d9d9',
            3: '#bfbfbf',
            4: '#a6a6a6',
            5: '#8c8c8c',
            6: '#737373',
            7: '#595959',
            8: '#404040',
            9: '#262626',
        },
    },

    {
        name: 'error',

        shades: {
            default: '#d32752',
            1: '#fbe9ee',
            2: '#f3becc',
            3: '#eb93a9',
            4: '#e36887',
            5: '#db3d65',
            6: '#db3d65',
            7: '#c2244b',
            8: '#971c3b',
            9: '#6c142a',
        },
    },

    {
        name: 'info',
        shades: {
            default: '#00bcd4',
            1: '#e5fcff',
            2: '#b3f6ff',
            3: '#80f1ff',
            4: '#4debff',
            5: '#1ae5ff',
            6: '#00cce6',
            7: '#009eb3',
            8: '#007180',
            9: '#00444d',
        },
    },

    {
        name: 'teal',
        shades: {
            default: '#009688',
            1: '#e5fffd',
            2: '#b3fff8',
            3: '#80fff3',
            4: '#1affea',
            5: '#00e6d0',
            6: '#00b3a2',
            7: '#008074',
            8: '#004d45',
            9: '#00463f',
        },
    },

    {
        name: 'blue',
        shades: {
            default: '#1919e6',
            1: '#e8e8fc',
            2: '#babaf7',
            3: '#8c8cf2',
            4: '#5e5eed',
            5: '#3030e8',
            6: '#1717cf',
            8: '#1212a1',
            9: '#0d0d73',
        },
    },

    {
        name: 'red',
        shades: {
            default: '#e61919',
            1: '#fce8e8',
            2: '#f7baba',
            3: '#f28c8c',
            4: '#ed5e5e',
            5: '#e83030',
            6: '#cf1717',
            7: '#a11212',
            8: '#730d0d',
            9: '#450808',
        },
    },

    {
        name: 'yellow',
        shades: {
            default: '#e6e619',
            1: '#fcfce8',
            2: '#f7f7ba',
            3: '#f2f28c',
            4: '#eded5e',
            5: '#e8e830',
            6: '#cfcf17',
            7: '#a1a112',
            8: '#73730d',
            9: '#454508',
        },
    },

    {
        name: 'green',
        shades: {
            default: '#19e635',
            1: '#e8fceb',
            2: '#baf7c2',
            3: '#8cf29a',
            4: '#5eed72',
            5: '#30e849',
            6: '#17cf30',
            7: '#12a125',
            8: '#0d731b',
            9: '#084510',
        },
    },

    {
        name: 'orange',
        shades: {
            default: '#ffa600',
            1: '#fff6e5',
            2: '#ffe4b3',
            3: '#ffd380',
            4: '#ffc14d',
            5: '#ffaf1a',
            6: '#e69500',
            7: '#b37400',
            8: '#805300',
            9: '#805300',
        },
    },

    {
        name: 'purple',
        shades: {
            default: '#9900ff',
            1: '#f5e5ff',
            2: '#e0b3ff',
            3: '#cc80ff',
            4: '#b84dff',
            5: '#a31aff',
            6: '#8a00e6',
            7: '#6b00b3',
            8: '#4d0080',
            9: '#2e004d',
        },
    },

    {
        name: 'gray',
        shades: {
            default: '#808080',
            1: '#f2f2f2',
            2: '#d9d9d9',
            3: '#bfbfbf',
            4: '#a6a6a6',
            5: '#8c8c8c',
            6: '#737373',
            7: '#595959',
            8: '#404040',
            9: '#262626',
        },
    },

    {
        name: 'black',
        shades: {
            default: 'black',
        },
    },

    {
        name: 'white',
        shades: {
            default: 'white',
        },
    },
]

colors.forEach((color) => {
    console.log(color.name, color.shades)
})

module.exports = { colors }
