import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  projectType: string;
}

// Validation simple du formulaire
function validateFormData(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Le nom est requis (minimum 2 caractères)';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return 'Une adresse email valide est requise';
  }
  
  const phoneRegex = /^[\d\s+()-]{10,}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    return 'Un numéro de téléphone valide est requis';
  }
  
  const postalCodeRegex = /^\d{5}$/;
  if (!data.postalCode || !postalCodeRegex.test(data.postalCode)) {
    return 'Un code postal valide (5 chiffres) est requis';
  }
  
  if (!data.projectType) {
    return 'Le type de projet est requis';
  }
  
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;
    
    // Validation
    const validationError = validateFormData(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }
    
    // Ici vous pouvez ajouter:
    // - Envoi d'email via Resend, SendGrid, ou Nodemailer
    // - Sauvegarde en base de données
    // - Notification Slack/Discord
    // - Integration CRM
    
    // Pour l'instant, on simule un succès
    // TODO: Implémenter l'envoi réel d'email
    console.log('Nouvelle demande de devis:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      postalCode: body.postalCode,
      projectType: body.projectType,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès. Nous vous contacterons sous 48h.',
    });
    
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
