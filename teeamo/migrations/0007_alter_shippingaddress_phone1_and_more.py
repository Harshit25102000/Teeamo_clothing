# Generated by Django 4.0.1 on 2022-03-10 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teeamo', '0006_alter_order_complete'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shippingaddress',
            name='phone1',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='phone2',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
