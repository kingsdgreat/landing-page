import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Send email to team
    const teamEmailResult = await resend.emails.send({
      from: 'contact@yourdomain.com', // Replace with your verified domain
      to: ['offers@sundiallands.com'], // Your team email
      subject: `New ${source === 'schedule-visit' ? 'Visit Request' : source === 'property-details' ? 'Property Inquiry' : 'Contact Form'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #1A5DC9; padding-bottom: 10px;">
            New ${source === 'schedule-visit' ? 'Visit Request' : source === 'property-details' ? 'Property Inquiry' : 'Contact Form'}
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
            ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
            <p><strong>Source:</strong> ${source || 'contact-form'}</p>
          </div>

          ${propertyTitle ? `
          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Property Details</h3>
            <p><strong>Property:</strong> ${propertyTitle}</p>
            <p><strong>Location:</strong> ${propertyLocation || 'N/A'}</p>
            <p><strong>Price:</strong> $${propertyPrice?.toLocaleString() || 'N/A'}</p>
          </div>
          ` : ''}

          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p>${message || 'No additional message provided.'}</p>
          </div>

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>Action Required:</strong> 
              ${source === 'schedule-visit' ? 'Please contact the customer to confirm their visit appointment.' : 
                source === 'property-details' ? 'Please provide more information about the property and schedule a visit.' : 
                'Please respond to this general inquiry.'}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: 'contact@yourdomain.com', // Replace with your verified domain
      to: [email],
      subject: `Thank you for your ${source === 'schedule-visit' ? 'visit request' : source === 'property-details' ? 'property inquiry' : 'message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5DC9; text-align: center;">
            Thank You for Contacting Us!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your interest in our properties. We've received your ${source === 'schedule-visit' ? 'visit request' : source === 'property-details' ? 'property inquiry' : 'message'} and our team will get back to you within 24 hours.</p>

          ${propertyTitle ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Property Inquiry</h3>
            <p><strong>Property:</strong> ${propertyTitle}</p>
            <p><strong>Location:</strong> ${propertyLocation || 'N/A'}</p>
            <p><strong>Price:</strong> $${propertyPrice?.toLocaleString() || 'N/A'}</p>
            ${preferredDate ? `<p><strong>Preferred Visit Date:</strong> ${preferredDate}</p>` : ''}
            ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
          </div>
          ` : ''}

          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul style="color: #666;">
              <li>Our sales team will review your ${source === 'schedule-visit' ? 'visit request' : 'inquiry'}</li>
              <li>We'll contact you within 24 hours</li>
              ${source === 'schedule-visit' ? '<li>We\'ll confirm your visit appointment</li>' : ''}
              ${source === 'property-details' ? '<li>We\'ll schedule a property visit if interested</li>' : ''}
              <li>Provide you with additional property information</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">If you have any urgent questions, please call us at:</p>
            <p style="font-size: 18px; font-weight: bold; color: #1A5DC9;">(323) 410-2500</p>
          </div>

          <p style="color: #666; font-size: 14px; text-align: center;">
            Best regards,<br>
            The Sundial Lands Team
          </p>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      message: `${source === 'schedule-visit' ? 'Visit request' : source === 'property-details' ? 'Property inquiry' : 'Contact form'} submitted and emails sent successfully`,
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
        customerEmailId: customerEmailResult.data?.id,
      }
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 