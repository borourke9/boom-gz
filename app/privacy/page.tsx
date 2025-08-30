export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              At NEXGEN, we collect minimal information to provide you with the best service possible. 
              When you contact us through our website form, we collect your name, email, company, and project details 
              solely to respond to your inquiry and provide you with a customized plan.
            </p>
            
            <p className="text-gray-700 mb-6">
              We use Google Analytics to understand how visitors use our site, which helps us improve our services. 
              This data is anonymized and doesn't identify individual users. We never sell, rent, or share your 
              personal information with third parties.
            </p>
            
            <p className="text-gray-700 mb-6">
              If you have any questions about how we handle your data, please contact us at{' '}
              <a href="mailto:hello@nexgensites.com" className="text-blue-600 hover:underline">
                hello@nexgensites.com
              </a>
            </p>
            
            <p className="text-sm text-gray-500">
              Last updated: August 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

