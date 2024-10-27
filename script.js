document.addEventListener("DOMContentLoaded", function () {
    // إعداد شريط التقدم للمهارات
    document.querySelectorAll('.progress').forEach(function (progress) {
        const width = progress.getAttribute('data-width');
        progress.style.width = width + '%';
    });

    // رسم المخطط البياني للمهارات
    const ctx = document.getElementById('skills-chart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Microsoft Office', 'Power BI', 'Adobe Photoshop', 'الذكاء الاصطناعي', 'شبكات الحاسب'],
            datasets: [{
                label: 'المستوى',
                data: [95, 90, 85, 80, 75],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
