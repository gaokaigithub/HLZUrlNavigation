# Generated by Django 3.0.2 on 2020-01-22 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20200121_2033'),
    ]

    operations = [
        migrations.AddField(
            model_name='privateresources',
            name='share',
            field=models.BooleanField(default=False, verbose_name='是否分享'),
        ),
        migrations.AddField(
            model_name='privateresources',
            name='share_date',
            field=models.DateField(auto_now=True, verbose_name='分享日期'),
        ),
        migrations.AddField(
            model_name='privateresources',
            name='share_hot',
            field=models.BigIntegerField(default=0, verbose_name='分享热度'),
        ),
    ]