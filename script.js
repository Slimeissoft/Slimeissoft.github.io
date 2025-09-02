// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 移动端菜单切换
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    // 切换图标
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 关闭移动端菜单
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 考虑导航栏高度
          behavior: 'smooth'
        });
      }
    });
  });

  // 首页动画效果
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroButtons = document.getElementById('hero-buttons');
  const scrollHint = document.getElementById('scroll-hint');

  // 延迟显示首页元素，创建动画序列
  setTimeout(() => {
    heroTitle.classList.add('fade-in');
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 300);

  setTimeout(() => {
    heroSubtitle.classList.add('fade-in');
    heroSubtitle.style.opacity = '1';
    heroSubtitle.style.transform = 'translateY(0)';
  }, 700);

  setTimeout(() => {
    heroButtons.classList.add('fade-in');
    heroButtons.style.opacity = '1';
    heroButtons.style.transform = 'translateY(0)';
  }, 1100);

  setTimeout(() => {
    scrollHint.style.opacity = '1';
  }, 1500);

  // 滚动动画
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('active');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('active');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // 初始检查
  handleScrollAnimation();

  // 角色滑块功能
const characterWrapper = document.getElementById('characterWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const characterIndicators = document.getElementById('characterIndicators').children;

let currentPosition = 0;
const totalSlides = characterIndicators.length;

// 获取卡片宽度的函数
const getCardWidth = () => {
  const card = document.querySelector('.character-card');
  if (!card) return 350 + 16; // 默认值
  return card.offsetWidth + 16; // 卡片宽度 + 间距
};

let slideWidth = getCardWidth();

// 更新指示器
const updateIndicators = (index) => {
  for (let i = 0; i < characterIndicators.length; i++) {
    if (i === index) {
      characterIndicators[i].classList.remove('bg-gray-600');
      characterIndicators[i].classList.add('bg-blue-500');
    } else {
      characterIndicators[i].classList.remove('bg-blue-500');
      characterIndicators[i].classList.add('bg-gray-600');
    }
  }
};

// 移动滑块
const moveSlider = (position) => {
  currentPosition = position;
  // 限制在有效范围内
  if (currentPosition < 0) currentPosition = 0;
  if (currentPosition > totalSlides - 1) currentPosition = totalSlides - 1;
  
  // 计算偏移量
  slideWidth = getCardWidth();
  const offset = -currentPosition * slideWidth;
  characterWrapper.style.transform = `translateX(${offset}px)`;
  
  // 更新指示器
  updateIndicators(currentPosition);
};

// 按钮事件监听
prevBtn.addEventListener('click', () => {
  moveSlider(currentPosition - 1);
});

nextBtn.addEventListener('click', () => {
  moveSlider(currentPosition + 1);
});

// 指示器点击事件
for (let i = 0; i < characterIndicators.length; i++) {
  characterIndicators[i].addEventListener('click', () => {
    moveSlider(i);
  });
}

// 窗口大小改变时重新计算
window.addEventListener('resize', () => {
  // 重新计算幻灯片宽度并更新位置
  moveSlider(currentPosition);
});

// 移动端触摸支持
let touchStartX = 0;
let touchEndX = 0;

characterWrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

characterWrapper.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
});

characterWrapper.addEventListener('touchend', () => {
  // 检测滑动方向
  if (touchStartX - touchEndX > 50) {
    // 向左滑动
    moveSlider(currentPosition + 1);
  } else if (touchEndX - touchStartX > 50) {
    // 向右滑动
    moveSlider(currentPosition - 1);
  }
});

  // 返回顶部按钮
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('opacity-0', 'invisible');
      backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'visible');
      backToTopBtn.classList.add('opacity-0', 'invisible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 数字动画
  const counters = document.querySelectorAll('.counter');
  let counted = false;
  
  const startCounting = () => {
    if (counted) return;
    
    counters.forEach(counter => {
      const target = parseInt(counter.innerText);
      counter.innerText = '0';
      
      const updateCounter = () => {
        const current = parseInt(counter.innerText);
        const increment = target / 50;
        
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 50);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
    });
    
    counted = true;
  };
  
  // 检测元素是否在视图中
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    if (counters.length > 0) {
      observer.observe(counters[0]);
    }
  };
  
  observeElements();

  // 创建粒子背景效果
  const createParticles = () => {
    const sections = ['home', 'characters', 'story'];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      
      const particleContainer = document.createElement('div');
      particleContainer.classList.add('particle-container');
      section.appendChild(particleContainer);
      
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 随机大小、位置和动画延迟
        const size = Math.random() * 5 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 10;
        
        // 随机颜色（蓝色系）
        const hue = Math.random() * 60 + 200; // 蓝色范围
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.backgroundColor = `hsla(${hue}, 100%, 70%, ${opacity})`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(particle);
      }
    });
  };
  
  createParticles();

  // 视频播放按钮效果
  const trailer = document.getElementById('trailer');
  if (trailer) {
    trailer.addEventListener('click', () => {
      // 这里可以添加视频播放逻辑
      alert('视频播放功能将在游戏正式发布后开放');
    });
  }

  // 表单提交处理
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 简单的表单验证
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      if (!name || !email) {
        alert('请填写完整的信息');
        return;
      }
      
      // 这里可以添加表单提交逻辑
      alert('预约成功！我们将通过邮箱通知您游戏的最新动态。');
      form.reset();
    });
  }

  // 添加星空背景
  const addStarField = () => {
    const section = document.getElementById('home');
    if (!section) return;
    
    const starField = document.createElement('div');
    starField.classList.add('star-field');
    section.appendChild(starField);
    
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机大小、位置和动画延迟
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 2;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      
      starField.appendChild(star);
    }
  };
  
  addStarField();

  // 特色卡片悬停效果增强
const featureCards = document.querySelectorAll('.feature-card');

// 检测是否为触摸设备
const isTouchDevice = 'ontouchstart' in document.documentElement;

featureCards.forEach(card => {
  if (!isTouchDevice) {
    // 非触摸设备使用鼠标悬停效果
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 20;
      const tiltY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
      card.style.boxShadow = `0 10px 30px rgba(59, 130, 246, 0.2)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = 'none';
    });
  } else {
    // 触摸设备使用点击效果
    card.addEventListener('touchstart', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)';
      card.style.boxShadow = `0 10px 30px rgba(59, 130, 246, 0.2)`;
    });
    
    card.addEventListener('touchend', () => {
      setTimeout(() => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.boxShadow = 'none';
      }, 200);
    });
  }
});

// 添加响应式动画性能优化
function optimizeAnimationPerformance() {
  // 检测设备性能
  const isLowPerformance = window.navigator.hardwareConcurrency < 4 || window.innerWidth < 768;
  
  if (isLowPerformance) {
    // 低性能设备减少动画复杂度
    const animatedElements = document.querySelectorAll('[data-scroll]');
    animatedElements.forEach(el => {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  }
}

optimizeAnimationPerformance();

// 窗口大小变化时重新评估性能
window.addEventListener('resize', optimizeAnimationPerformance);
});