# Google Forms Integration Setup

This project includes Google Forms integration for the contact form. Follow these steps to set up the integration:

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with the following fields:
   - **First Name** (Short answer, Required)
   - **Last Name** (Short answer, Required)
   - **Email Address** (Short answer, Required)
   - **Company** (Short answer, Optional)
   - **Service Interest** (Multiple choice with options: Branding, Web Design, Social Media Strategy, General Consultation)
   - **Project Budget** (Multiple choice with options: Under $5,000, $5,000 - $10,000, $10,000 - $25,000, $25,000 - $50,000, Over $50,000)
   - **Project Details** (Paragraph, Required)

## Step 2: Get Form ID

1. In your Google Form, click "Send"
2. Click the link icon to get the shareable link
3. Copy the form ID from the URL: `https://docs.google.com/forms/d/[FORM_ID]/edit` 1FAIpQLSeLDmyX4SJTej7kic9TXxBEMvfLDnUK6pZLkEmdn1fW57W1sQ


## Step 3: Get Entry IDs

You need to get the entry IDs for each form field. There are two methods:

### Method A: Inspect Form HTML (Recommended)

1. Open your Google Form in a browser
2. Right-click and select "View Page Source" or "Inspect Element"
3. Search for `entry.` to find entry IDs for each field
4. Note down the entry IDs for each field

### Method B: Pre-filled URL Method

1. In your Google Form, click the three dots menu (⋮)
2. Select "Get pre-filled link"
3. Fill out the form with sample data
4. Click "Get link"
5. The URL will contain entry IDs like `entry.123456789=SampleData`


Field ID	Sample Value
entry.1743089855	first
entry.1692624681	last
entry.1301056248	mail@mail.com
entry.1468211199	aa
entry.1592190856	Branding
entry.289577027	Under $5000
entry.967425827	aa

## Step 4: Update the Code

1. Open `src/components/ContactForm.jsx`
2. Replace `1FAIpQLSd_YOUR_ACTUAL_FORM_ID` with your actual form ID
3. Replace the placeholder entry IDs in the `FORM_FIELDS` object:

```javascript
const FORM_FIELDS = {
  firstName: "entry.YOUR_FIRST_NAME_ENTRY_ID",
  lastName: "entry.YOUR_LAST_NAME_ENTRY_ID",
  email: "entry.YOUR_EMAIL_ENTRY_ID",
  company: "entry.YOUR_COMPANY_ENTRY_ID",
  service: "entry.YOUR_SERVICE_ENTRY_ID",
  budget: "entry.YOUR_BUDGET_ENTRY_ID",
  message: "entry.YOUR_MESSAGE_ENTRY_ID",
};
```

## Step 5: Test the Integration

1. Deploy your website or test locally
2. Fill out the contact form
3. Check your Google Form responses to see if the data is being received

## Step 6: Set up Response Notifications (Optional)

1. In your Google Form, click "Responses"
2. Click the three dots menu (⋮)
3. Select "Get email notifications for new responses"
4. You'll receive an email notification for each form submission

## Security Notes

- Google Forms uses CORS protection, so the form will submit but you won't receive a response
- The form uses `mode: "no-cors"` which is required for Google Forms
- Consider adding additional client-side validation if needed
- For production, remove the setup instructions section from the ContactForm component

## Troubleshooting

- **Form not submitting**: Check that the form ID and entry IDs are correct
- **No data in Google Form**: Ensure field names match the entry IDs exactly
- **CORS errors**: This is normal with Google Forms, the data is still being submitted

## Alternative: Use Google Apps Script (Advanced)

For more control over form submissions and responses, consider using Google Apps Script as a middle layer between your form and Google Sheets.
