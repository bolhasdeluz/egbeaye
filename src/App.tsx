const cargos = [
  { nome: 'Mãe da Casa', tagline: 'Guia e sustenta a casa em todos os fundamentos.', emoji: '👑' },
  { nome: 'Cacique', tagline: 'Conduz os trabalhos e a tradição da casa.', emoji: '🪶' },
  { nome: 'Tamoio', tagline: 'Sustenta a corrente com firmeza e dedicação.', emoji: '🔥' },
  { nome: 'Naurú', tagline: 'Caminha junto, fortalecendo os fundamentos da casa.', emoji: '🌿' },
  { nome: 'Cambona', tagline: 'Cuida dos detalhes que sustentam cada gira.', emoji: '🕯️' },
  { nome: 'Tamboreiro', tagline: 'Dá o ritmo e o axé de cada sessão.', emoji: '🥁' },
  { nome: 'Curumim', tagline: 'Os primeiros passos de uma caminhada que floresce.', emoji: '🌱' },
]

const terreirosDestaque = [
  { nome: 'Terreiro Bolhas de Luz', cidade: 'Porto Alegre, RS', tradicao: 'Umbanda e Quimbanda', filhas: 42 },
  { nome: 'Tenda Estrela do Oriente', cidade: 'Curitiba, PR', tradicao: 'Umbanda', filhas: 27 },
  { nome: 'Terreiro Sete Encruzilhadas', cidade: 'Belo Horizonte, MG', tradicao: 'Quimbanda', filhas: 19 },
]

const recursos = [
  { titulo: 'Perfil da filha de santo', desc: 'Guias, cruzamentos, história e marcos do médium reunidos num só lugar.', emoji: '🌸' },
  { titulo: 'Sessões e agenda', desc: 'Calendário por tipo de gira, com visibilidade por grupo e tamboreiro escalado.', emoji: '📅' },
  { titulo: 'Tesouraria', desc: 'Lançamentos, pagamentos e caixa da casa organizados e transparentes.', emoji: '💰' },
  { titulo: 'Mapa dos terreiros', desc: 'Encontre casas afiliadas na rede Axé, com tradição e localização.', emoji: '🗺️' },
]

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-stone-800/80 sticky top-0 z-10 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-lg font-semibold tracking-wide">Axé</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-300">
            <a href="#terreiros" className="hover:text-amber-400 transition-colors">Terreiros</a>
            <a href="#cargos" className="hover:text-amber-400 transition-colors">Cargos</a>
            <a href="#recursos" className="hover:text-amber-400 transition-colors">Recursos</a>
          </nav>
          <button className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-stone-950 hover:bg-amber-400 transition-colors">
            Entrar
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Plataforma de Terreiros</p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
          Cada terreiro, sua corrente. Uma casa espiritual para cada filha e filho de santo.
        </h1>
        <p className="mt-6 text-stone-400 max-w-2xl mx-auto">
          Axé hospeda várias casas de Umbanda e Quimbanda: perfis de terreiro, cargos, filhas de santo,
          guias, sessões, tesouraria e a jornada espiritual de cada médium — tudo em um só lugar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-stone-950 hover:bg-amber-400 transition-colors">
            Conhecer os terreiros
          </button>
          <button className="rounded-full border border-stone-700 px-6 py-3 text-sm font-medium text-stone-200 hover:border-amber-400 transition-colors">
            Cadastrar minha casa
          </button>
        </div>
      </section>

      <section id="terreiros" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">Terreiros em destaque</h2>
        <p className="text-stone-400 mb-8">Casas afiliadas à rede Axé.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {terreirosDestaque.map((t) => (
            <div key={t.nome} className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 hover:border-amber-500/50 transition-colors">
              <h3 className="font-medium text-lg">{t.nome}</h3>
              <p className="text-stone-400 text-sm mt-1">{t.cidade}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="rounded-full bg-stone-800 px-3 py-1 text-amber-300">{t.tradicao}</span>
                <span className="text-stone-400">{t.filhas} filhas</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cargos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">Cargos da casa</h2>
        <p className="text-stone-400 mb-8">A hierarquia é opcional — cada terreiro define os seus próprios cargos.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cargos.map((c) => (
            <div key={c.nome} className="rounded-xl border border-stone-800 bg-stone-900/40 p-5">
              <span className="text-2xl">{c.emoji}</span>
              <h3 className="font-medium mt-3">{c.nome}</h3>
              <p className="text-stone-400 text-sm mt-1">{c.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">O que a plataforma oferece</h2>
        <p className="text-stone-400 mb-8">Ferramentas pensadas para o dia a dia do terreiro.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map((r) => (
            <div key={r.titulo} className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6">
              <span className="text-2xl">{r.emoji}</span>
              <h3 className="font-medium mt-3">{r.titulo}</h3>
              <p className="text-stone-400 text-sm mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-stone-800/80 mt-8">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-stone-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© 2026 Axé — Plataforma de Terreiros</span>
          <span>Feito com respeito à tradição de Umbanda e Quimbanda.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
