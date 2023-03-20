export interface AppContextInterface {
  id: { $oid: string }
  personalDetails: {
    firstName: string
    lastName: string
    bday: string
    address: string
    email: string
    phoneNumber: string
    about: string
  }
  education: {
    degree: string
    course: string
    year: string
    school: string
    schoolAddress: string
  }
  professionalDetails: {
    mainTitles: string
    summary: string
    jobTitles: string[]
    website: string
    skills: { name: string; rate?: string | number }[]
  }
  jobExperiences: {
    title: string
    date: string
    company: string
    tasks: string[]
  }[]
  socialMedias: { title: string; url: string }[]
  portfolios: {
    id: string
    name: string
    url: string
    img: string
    app: string
    description: string
    createdAt: string
  }[]
}
