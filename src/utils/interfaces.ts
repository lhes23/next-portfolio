export interface AppContextInterface extends IJobExperiences, IPortfolios {
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
    skills: ISkill[]
  }
  socialMedias: { title: string; url: string }[]
}

export interface IJobExperience {
  title: string
  date: string
  company: string
  tasks: string[]
}

export interface IJobExperiences {
  jobExperiences: IJobExperience[]
}

export interface IPortfolio {
  id: string
  name: string
  url: string
  img: string
  app: string
  tech: string[]
  description: string
  createdAt: string
}

export interface IPortfolios {
  portfolios: IPortfolio[]
}

export interface ISkill {
  name: string
}

// New Interface from DB
export interface IJobTitle {
  id: string
  name: string
}
