import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'axsxo5w8',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skxRvcBleH3326n5hIFxQ02ulcUvE7WRylf6wmgkTix4UELz0DyCN2ZdsZgEVQFv8VHjisi5jn900pEK2jtHMiq0q7Sams4zShwvGwPfVicEc8ugpx8ZrjZAJC0DBuKWt9Yj1nbutpBINGUQN5MtB5hzJ7hvlpbd1bPrQBsTJczrbnFjLG8O',
    useCdn: false, // `false` if you want to ensure fresh data
  })