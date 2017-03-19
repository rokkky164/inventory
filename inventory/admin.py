from django.contrib import admin
from inventory.models import Item, Inventory

class InventoryAdmin(admin.ModelAdmin):
    readonly_fields = ('updated_by', 'added_on', 'updated_on')

    def save_model(self, request, obj, form, change):
        obj.updated_by = request.user
        return super(InventoryAdmin, self).save_model(request, obj, form, change)

# Register your models here.
admin.site.register(Item)
admin.site.register(Inventory, InventoryAdmin)
