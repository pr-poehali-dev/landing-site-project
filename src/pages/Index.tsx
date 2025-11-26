import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Правозащита</div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-accent transition-colors">Главная</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:inline-flex">Консультация</Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Более 15 лет опыта
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
                Защита ваших прав и интересов
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Юридическая практика, основанная на глубоком знании закона и неизменной приверженности интересам клиента
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Выигранных дел</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15</div>
                  <div className="text-sm text-muted-foreground">Лет практики</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Успешных исходов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/2ad42874-7e85-4081-bd98-8629fa4ee2bc/files/1bae4fd5-e520-4b0b-9eff-31be218e777b.jpg"
                alt="Юрист"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Юридические услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная правовая помощь в различных областях права
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-accent"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <Icon name="Award" size={64} className="mx-auto mb-6 text-accent" />
          <h2 className="text-4xl font-bold mb-6">Достижения и признание</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-accent">{achievement.value}</div>
                <div className="text-sm opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Свяжитесь со мной</h2>
                <p className="text-xl text-muted-foreground">
                  Готов обсудить вашу ситуацию и предложить оптимальное решение
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">Email</div>
                    <a href="mailto:lawyer@example.com" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                      lawyer@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">Адрес</div>
                    <div className="text-lg text-muted-foreground">
                      г. Москва, ул. Примерная, д. 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Имя</label>
                  <Input
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <Input
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Сообщение</label>
                  <Textarea
                    placeholder="Опишите вашу ситуацию"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Правозащита</div>
              <p className="text-sm opacity-80">
                Профессиональная юридическая помощь и защита ваших интересов
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Гражданское право</li>
                <li>Уголовная защита</li>
                <li>Административное право</li>
                <li>Трудовое право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>lawyer@example.com</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: 'Scale',
    title: 'Гражданское право',
    description: 'Защита ваших имущественных и неимущественных прав в гражданских спорах',
    items: [
      'Договорное право',
      'Наследственные споры',
      'Защита прав потребителей',
      'Возмещение ущерба'
    ]
  },
  {
    icon: 'Shield',
    title: 'Уголовная защита',
    description: 'Профессиональная защита на всех стадиях уголовного процесса',
    items: [
      'Защита в суде',
      'Представительство в следствии',
      'Обжалование приговоров',
      'Досудебное урегулирование'
    ]
  },
  {
    icon: 'FileText',
    title: 'Административное право',
    description: 'Защита прав в спорах с государственными органами',
    items: [
      'Обжалование постановлений',
      'Защита бизнеса',
      'Лицензирование',
      'Государственные закупки'
    ]
  },
  {
    icon: 'Briefcase',
    title: 'Трудовое право',
    description: 'Решение споров между работниками и работодателями',
    items: [
      'Незаконные увольнения',
      'Невыплата заработной платы',
      'Трудовые договоры',
      'Защита трудовых прав'
    ]
  },
  {
    icon: 'Home',
    title: 'Жилищное право',
    description: 'Консультации и представительство в жилищных вопросах',
    items: [
      'Сделки с недвижимостью',
      'Приватизация',
      'Споры с ТСЖ и УК',
      'Выселение и вселение'
    ]
  },
  {
    icon: 'Users',
    title: 'Семейное право',
    description: 'Деликатное решение семейных споров и конфликтов',
    items: [
      'Расторжение брака',
      'Раздел имущества',
      'Алименты',
      'Опека и попечительство'
    ]
  }
];

const achievements = [
  { value: '500+', label: 'Выигранных дел' },
  { value: '15', label: 'Лет практики' },
  { value: '98%', label: 'Успешных исходов' },
  { value: '24/7', label: 'Поддержка клиентов' }
];
