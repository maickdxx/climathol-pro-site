export function UpgradeModal({ open, onOpenChange, feature }: { open: boolean; onOpenChange: (v: boolean) => void; feature?: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card p-6 rounded-lg max-w-md">
        <h2 className="text-lg font-bold mb-2">Upgrade necessário</h2>
        <p className="text-muted-foreground mb-4">Faça upgrade para acessar esta funcionalidade.</p>
        <button onClick={() => onOpenChange(false)} className="px-4 py-2 bg-primary text-primary-foreground rounded">Fechar</button>
      </div>
    </div>
  );
}
