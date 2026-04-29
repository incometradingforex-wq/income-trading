import { Star, CheckCircle, TrendingUp, Users, Clock, Award, X, User } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [showCGU, setShowCGU] = useState(false);
  const testimonials = [
    {
      name: "Thomas Dubois",
      role: "Trader Débutant",
      rating: 5,
      text: "Le mentorat 1-on-1 a complètement transformé ma façon de trader. Les concepts ICT sont enfin clairs pour moi. Meilleur investissement que j'ai fait !"
    },
    {
      name: "Sophie Martin",
      role: "Trader Intermédiaire",
      rating: 5,
      text: "J'ai essayé plusieurs formations mais celle-ci est incomparable. L'approche personnalisée fait toute la différence. Je suis maintenant rentable chaque mois."
    },
    {
      name: "Alexandre Rousseau",
      role: "Ex-Trader Perdant",
      rating: 5,
      text: "Après 2 ans de pertes, j'ai enfin compris la logique Smart Money. Le coach s'adapte à mon niveau et corrige mes erreurs en temps réel. Incroyable !"
    },
    {
      name: "Marie Leclerc",
      role: "Trader Temps Partiel",
      rating: 5,
      text: "Formation adaptée à mon emploi du temps. Les sessions 1-on-1 sont flexibles et ultra-efficaces. Je progresse plus vite qu'avec des cours en groupe."
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Coaching 1-on-1 Personnalisé",
      description: "Sessions individuelles adaptées à votre niveau et vos objectifs de trading"
    },
    {
      icon: TrendingUp,
      title: "Concepts ICT & Smart Money",
      description: "Maîtrisez les stratégies institutionnelles et la logique Smart Money Concepts"
    },
    {
      icon: Clock,
      title: "Accès Illimité",
      description: "Support continu et révisions illimitées pendant toute la durée du programme"
    },
    {
      icon: Award,
      title: "Stratégies Éprouvées",
      description: "Techniques testées sur les marchés réels avec résultats vérifiables"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Income Trading</span>
            </div>
            <a
              href="#pricing"
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
            >
              Commencer
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <div className="size-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm">Places Limitées Disponibles</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Maîtrisez le Trading<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                ICT & Smart Money
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Formation complète avec coaching personnalisé 1-on-1. Apprenez les stratégies institutionnelles et tradez comme les professionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                Commencer Maintenant
              </a>
              <a
                href="#program"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all border border-white/10"
              >
                En Savoir Plus
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-emerald-400" />
                <span>Formation Certifiée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-emerald-400" />
                <span>Résultats Garantis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-emerald-400" />
                <span>Support Illimité</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="program" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ce Que Vous Allez Apprendre
            </h2>
            <p className="text-slate-400 text-lg">
              Un programme complet pour passer de débutant à trader profitable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="size-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="size-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Programme de Formation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Fondamentaux des marchés financiers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Structure du marché et Order Blocks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Liquidity Sweeps et Inducements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Fair Value Gaps (FVG) et Imbalances</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Stratégies de Killzones et sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Gestion du risque et Money Management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Psychologie du trading professionnel</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Backtesting et Journal de trading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ils Ont Transformé Leur Trading
            </h2>
            <p className="text-slate-400 text-lg">
              Découvrez les résultats de nos élèves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center">
                    <User className="size-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tarif Unique et Transparent
            </h2>
            <p className="text-slate-400 text-lg">
              Investissez dans votre avenir de trader
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-20"></div>

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
              <div className="text-center mb-8">
                <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                  <span className="text-emerald-400 font-semibold">Offre Exclusive</span>
                </div>

                <div className="mb-6">
                  <div className="text-6xl font-bold text-white mb-2">
                    €719<span className="text-3xl">.99</span>
                  </div>
                  <div className="text-slate-400">Paiement unique - Accès à vie</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Sessions de coaching 1-on-1 personnalisées</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Formation complète ICT & Smart Money Concepts</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Ressources et templates de trading exclusifs</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Support illimité via Discord/Telegram</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Accès à la communauté privée de traders</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="size-6 text-emerald-400 flex-shrink-0" />
                  <span>Mises à jour et nouvelles stratégies gratuites</span>
                </div>
              </div>

              <a
                href="https://whop.com/checkout/1lZJNwFTGCVoOSAQE1-SqFa-7kY1-3Kp7-j0uado0JZRrD/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/25 text-center"
              >
                Réserver Ma Place Maintenant
              </a>

              <p className="text-center text-slate-400 text-sm mt-6">
                🔒 Paiement sécurisé • Garantie satisfait ou remboursé 14 jours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Combien de temps dure la formation ?
              </h3>
              <p className="text-slate-400">
                La formation est à votre rythme avec un accès à vie. En moyenne, nos élèves atteignent la rentabilité en 3-6 mois avec un engagement régulier.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Dois-je avoir de l'expérience en trading ?
              </h3>
              <p className="text-slate-400">
                Non ! Le programme est conçu pour tous les niveaux. Que vous soyez débutant ou trader expérimenté cherchant à améliorer vos résultats.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quel capital de départ est nécessaire ?
              </h3>
              <p className="text-slate-400">
                Vous pouvez commencer avec un compte démo pour apprendre. Pour trader en réel, nous recommandons minimum 100-500€ pour débuter en toute sécurité.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Comment se déroulent les sessions 1-on-1 ?
              </h3>
              <p className="text-slate-400">
                Les sessions sont planifiées selon votre disponibilité via Zoom/Discord. Vous bénéficiez d'un accompagnement personnalisé avec analyse de vos trades et correction en temps réel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2026 Income Trading. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Le trading comporte des risques. Ne tradez qu'avec de l'argent que vous pouvez vous permettre de perdre.
          </p>
          <button
            onClick={() => setShowCGU(true)}
            className="text-emerald-400 hover:text-emerald-300 text-sm mt-4 underline"
          >
            Conditions Générales d'Utilisation
          </button>
        </div>
      </div>

      {/* CGU Modal */}
      {showCGU && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Conditions Générales d'Utilisation</h2>
              <button
                onClick={() => setShowCGU(false)}
                className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 text-slate-300">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">1. Objet</h3>
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la formation "Income Trading" proposée par Income Trading. En vous inscrivant à la formation, vous acceptez sans réserve les présentes CGU.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">2. Description du Service</h3>
                <p>
                  Income Trading propose une formation complète au trading basée sur les concepts ICT (Inner Circle Trader) et Smart Money Concepts (SMC), incluant des sessions de coaching personnalisées 1-on-1. Le tarif est fixé à 719,99€ TTC pour un accès à vie.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">3. Avertissement sur les Risques</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="font-semibold text-red-400 mb-2">IMPORTANT - À LIRE ATTENTIVEMENT :</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Le trading de produits financiers comporte des risques importants de perte en capital.</li>
                    <li>Les performances passées ne préjugent pas des performances futures.</li>
                    <li>Vous pouvez perdre tout ou partie de votre capital investi.</li>
                    <li>Ne tradez jamais avec de l'argent que vous ne pouvez pas vous permettre de perdre.</li>
                    <li>Cette formation est à but éducatif et ne constitue en aucun cas un conseil en investissement.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">4. Absence de Garantie de Résultats</h3>
                <p>
                  Income Trading ne garantit aucun résultat financier. Les témoignages et avis clients présentés sont des expériences individuelles et ne constituent pas une garantie de résultats similaires. Votre succès dépend de nombreux facteurs incluant votre engagement, votre capital, votre discipline et les conditions de marché.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">5. Inscription et Paiement</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Le paiement de 719,99€ est unique et donne accès à vie à la formation.</li>
                  <li>L'accès est personnel et non transférable.</li>
                  <li>Une garantie satisfait ou remboursé de 14 jours est offerte sous conditions.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">6. Droit de Rétractation</h3>
                <p>
                  Conformément à la législation en vigueur, vous disposez d'un délai de rétractation de 14 jours à compter de votre inscription. Pour exercer ce droit, contactez-nous par email. Le remboursement sera effectué dans les 14 jours suivant la demande, sous réserve que vous n'ayez pas consommé plus de 25% du contenu de la formation.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">7. Propriété Intellectuelle</h3>
                <p>
                  Tous les contenus de la formation (vidéos, documents, templates, stratégies) sont la propriété exclusive d'Income Trading et sont protégés par le droit d'auteur. Toute reproduction, diffusion ou commercialisation non autorisée est strictement interdite et passible de poursuites.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">8. Utilisation du Contenu</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Le contenu est réservé à un usage personnel et éducatif uniquement.</li>
                  <li>Le partage des accès, mots de passe ou contenu avec des tiers est interdit.</li>
                  <li>Toute violation entraînera la suspension immédiate de votre accès sans remboursement.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">9. Responsabilités</h3>
                <p>
                  Income Trading ne saurait être tenu responsable de vos pertes financières résultant de l'application des stratégies enseignées. Vous êtes seul responsable de vos décisions de trading et de la gestion de votre capital. Income Trading décline toute responsabilité en cas de dysfonctionnement technique, perte de données ou interruption de service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">10. Support et Coaching</h3>
                <p>
                  Les sessions de coaching 1-on-1 sont planifiées selon les disponibilités mutuelles. Income Trading s'engage à fournir un support de qualité mais ne garantit pas une disponibilité immédiate ou permanente. Les délais de réponse peuvent varier selon la charge de travail.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">11. Modifications des CGU</h3>
                <p>
                  Income Trading se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés par email de toute modification substantielle. L'utilisation continue de la formation après modification vaut acceptation des nouvelles conditions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">12. Protection des Données</h3>
                <p>
                  Vos données personnelles sont collectées et traitées conformément au RGPD. Elles ne seront jamais vendues à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">13. Résiliation</h3>
                <p>
                  Income Trading se réserve le droit de résilier votre accès en cas de violation des présentes CGU, de comportement abusif ou de fraude, sans remboursement ni préavis.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">14. Loi Applicable et Juridiction</h3>
                <p>
                  Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de France, sauf dispositions légales contraires.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">15. Contact</h3>
                <p>
                  Pour toute question concernant les présentes CGU, vous pouvez nous contacter à l'adresse : contact@incometrading.com
                </p>
              </section>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-8">
                <p className="text-sm">
                  Dernière mise à jour : 28 avril 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}