// js/graficos.js
document.addEventListener('DOMContentLoaded', () => {
    const ctxRotation = document.getElementById('rotationChart');
    const ctxInventory = document.getElementById('inventoryChart');

    if (ctxRotation) {
        new Chart(ctxRotation, {
            type: 'doughnut',
            data: {
                labels: ['Herramientas', 'Pinturas', 'Eléctricos', 'Plomería'],
                datasets: [{
                    label: 'Rotación',
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#1A365D', '#2F855A', '#C53030', '#ED8936'],
                    borderWidth: 0,
                    hoverOffset: 20
                }]
            },
            options: {
                plugins: {
                    legend: { position: 'bottom' }
                },
                cutout: '70%'
            }
        });
    }

    if (ctxInventory) {
        new Chart(ctxInventory, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
                datasets: [{
                    label: 'Nivel de Stock',
                    data: [850, 1200, 1050, 1400, 1500],
                    backgroundColor: 'rgba(47, 133, 90, 0.8)',
                    borderRadius: 10,
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, grid: { display: false } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
});
