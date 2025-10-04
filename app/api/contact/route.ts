import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Check if API key is available
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      message, 
      subject,
      preferredDate, 
      preferredTime,
      propertyTitle,
      propertyLocation,
      propertyPrice,
      source 
    } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Determine form type and create appropriate subject/content
    let formType = 'Contact Form'
    let actionRequired = 'Please respond to this general inquiry.'
    
    if (source === 'hero-section') {
      formType = 'Hero Section Lead'
      actionRequired = 'New lead from homepage - interested in properties. Please contact them with available properties.'
    } else if (source === 'schedule-visit') {
      formType = 'Visit Request'
      actionRequired = 'Please contact the customer to confirm their visit appointment.'
    } else if (source === 'property-details') {
      formType = 'Property Inquiry'
      actionRequired = 'Please provide more information about the property and schedule a visit.'
    } else if (source === 'contact-page') {
      formType = 'Contact Page Form'
      actionRequired = 'Please respond to this general inquiry.'
    }

    // Send email to team with form data
    const teamEmailResult = await resend.emails.send({
      from: 'Secure Your Land <info@secureyourland.com>',
      to: ['offers@secureyourland.com'], 
      subject: `New ${formType} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background-color: #1A5DC9; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New ${formType}</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.9;">From: ${name}</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #1A5DC9;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 20px; font-size: 18px; font-weight: 600;">Contact Information</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Name:</strong> ${name}</p>
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #1A5DC9; text-decoration: none;">${email}</a></p>
                ${phone ? `<p style="margin: 0; color: #555;"><strong style="color: #333;">Phone:</strong> <a href="tel:${phone}" style="color: #1A5DC9; text-decoration: none;">${phone}</a></p>` : ''}
                ${subject ? `<p style="margin: 0; color: #555;"><strong style="color: #333;">Subject:</strong> ${subject}</p>` : ''}
                ${preferredDate ? `<p style="margin: 0; color: #555;"><strong style="color: #333;">Preferred Date:</strong> ${preferredDate}</p>` : ''}
                ${preferredTime ? `<p style="margin: 0; color: #555;"><strong style="color: #333;">Preferred Time:</strong> ${preferredTime}</p>` : ''}
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Source:</strong> <span style="background-color: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">${source || 'contact-form'}</span></p>
              </div>
            </div>

            ${propertyTitle ? `
            <div style="background-color: #e8f4fd; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #2196f3;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 20px; font-size: 18px; font-weight: 600;">Property Details</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Property:</strong> ${propertyTitle}</p>
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Location:</strong> ${propertyLocation || 'N/A'}</p>
                <p style="margin: 0; color: #555;"><strong style="color: #333;">Price:</strong> <span style="color: #2e7d32; font-weight: 600; font-size: 16px;">$${propertyPrice?.toLocaleString() || 'N/A'}</span></p>
              </div>
            </div>
            ` : ''}

            <div style="background-color: #f3e5f5; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #9c27b0;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 20px; font-size: 18px; font-weight: 600;">Message</h3>
              <div style="background-color: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
              </div>
            </div>

            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
              <h4 style="color: #856404; margin-top: 0; margin-bottom: 10px; font-size: 16px; font-weight: 600;">⚡ Action Required</h4>
              <p style="margin: 0; color: #856404; line-height: 1.5;">${actionRequired}</p>
            </div>

            <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                <strong>Quick Actions:</strong><br>
                <a href="mailto:${email}" style="color: #1A5DC9; text-decoration: none; margin: 0 10px;">📧 Reply to ${name}</a>
                ${phone ? `<a href="tel:${phone}" style="color: #1A5DC9; text-decoration: none; margin: 0 10px;">📞 Call ${name}</a>` : ''}
              </p>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 12px;">
              This email was sent from your website contact form at secureyourland.com
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      message: `${formType} submitted successfully`,
      data: {
        id: Date.now(),
        name,
        email,
        phone,
        message,
        subject,
        preferredDate,
        preferredTime,
        propertyTitle,
        propertyLocation,
        propertyPrice,
        source: source || 'contact-form',
        timestamp: new Date().toISOString(),
        teamEmailId: teamEmailResult.data?.id,
      }
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    console.error('RESEND_API_KEY available:', !!process.env.RESEND_API_KEY)
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 