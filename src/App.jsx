import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import AboutPage from './pages/AboutPage'
import AdmissionPage from './pages/AdmissionPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogPage from './pages/BlogPage'
import CollegesPage from './pages/CollegesPage'
import ContactPage from './pages/ContactPage'
import CountriesPage from './pages/CountriesPage'
import CountryDetailPage from './pages/CountryDetailPage'
import CourseDetailPage from './pages/CourseDetailPage'
import CoursesPage from './pages/CoursesPage'
import ExamsPage from './pages/ExamsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  const Router = import.meta.env.BASE_URL === '/sg-edication/' ? HashRouter : BrowserRouter

  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/direct-admission" element={<AdmissionPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/:slug" element={<CountryDetailPage />} />
          <Route path="/colleges" element={<CollegesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
