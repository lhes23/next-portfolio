export interface AppContextInterface extends IJobExperiences, IPortfolios {
  // id: string
  user: IUser
  skills: ISkill[]
  jobTitles: IJobTitle[]
  socialMedias: ISocialMedia[]
}

export interface IJobExperiences {
  experiences: IExperience[]
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

export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  bday: string
  address: string
  phoneNumber: string
  about: string
  mainTitle: string
  summary: string
  website: string
  schoolDegree: string
  schoolCourse: string
  schoolName: string
  schoolYear: string
  schoolAddress: string
}

export interface ISkill {
  id: string
  name: string
}

export interface IJobTitle {
  id: string
  name: string
}

export interface IExperience {
  id: string
  title: string
  workDate: string
  company: string
  tasks: string[]
}

export interface ISocialMedia {
  id: string
  title: string
  url: string
}
