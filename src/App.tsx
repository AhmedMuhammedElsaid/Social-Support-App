import { useTranslation } from 'react-i18next';
import { FormWizard } from './components/Forms/FormWizard/FormWizard'
import { LanguageSwitcher } from './components/LanguageSwitcher/LanguageSwitcher'
import Layout from './components/layout/Layout'

function App() {
  const { t } = useTranslation();
  return <Layout
    header={
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{t("app.title")}</h1>
        <LanguageSwitcher />
      </div>} >
    <FormWizard />
  </Layout>
}

export default App
